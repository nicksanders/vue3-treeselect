<template>
  <div ref="menu-container" class="vue-treeselect__menu-container" :style="menuContainerStyle">
    <Transition name="vue-treeselect__menu--transition">
      <div v-if="instance.menu.isOpen" ref="menu" class="vue-treeselect__menu" @mousedown="instance.handleMouseDown" :style="menuStyle">
        <template v-if="instance.$slots['before-list']">
          {{ instance.$slots['before-list'] }}
        </template>
        <template v-if="instance.async">
            <Tip v-if="getTipIcon()" type="search-prompt" :icon="getTipIcon()">
              {{ getTipText() }}
              <a v-if="getTipIcon() === 'error'" class="vue-treeselect__retry" @click="instance.handleRemoteSearch" :title="instance.retryTitle">
                {{ instance.retryText }}
              </a>
            </Tip>

          <div v-else class="vue-treeselect__list">
            <Option v-for="rootNode in instance.forest.normalizedOptions" :node="rootNode" :key="rootNode.id" />
          </div>
        </template>
        <template v-else>
          <template v-if="instance.localSearch.active">
            <Tip v-if="getNormalTip()" type="search-prompt" :icon="getNormalTip()[0]">
              {{ getNormalTip()[1] }}
              <a v-if="getNormalTip()[2]" class="vue-treeselect__retry" @click="instance.loadRootOptions" :title="instance.retryTitle">
                {{ instance.retryText }}
              </a>
            </Tip>
            <div v-else class="vue-treeselect__list">
              <Option v-for="rootNode in instance.forest.normalizedOptions" :node="rootNode" :key="rootNode.id" />
            </div>
          </template>
          <template v-else>
            <Tip v-if="getNormalTip()" type="search-prompt" :icon="getNormalTip()[0]">
            {{ getNormalTip()[1] }}
            <a v-if="getNormalTip()[2]" class="vue-treeselect__retry" @click="instance.loadRootOptions" :title="instance.retryTitle">
              {{ instance.retryText }}
            </a>
          </Tip></template>
        </template>
        <template v-if="instance.$slots['after-list']">
          {{ instance.$slots['after-list'] }}
        </template>
      </div>
    </Transition>
  </div>
</template>

<script>
  import { MENU_BUFFER } from '../constants'
  import { watchSize, setupResizeAndScrollEventListeners } from '../utils'
  import Option from '@/components/Option.vue'
  import Tip from '@/components/Tip.vue'
  import { Transition } from "vue";

  const directionMap = {
    top: 'top',
    bottom: 'bottom',
    above: 'top',
    below: 'bottom',
  }

  export default {
    name: 'vue-treeselect--menu',
    inject: [ 'instance' ],
    components: { Transition, Tip, Option },
    computed: {
      menuStyle() {
        const { instance } = this

        return {
          maxHeight: instance.maxHeight + 'px',
        }
      },

      menuContainerStyle() {
        const { instance } = this

        return {
          zIndex: instance.appendToBody ? null : instance.zIndex,
        }
      },
      shouldShowSearchPromptTip() { return this.instance.trigger.searchQuery === '' && !this.instance.defaultOptions },
      entry() { return this.instance.getRemoteSearchEntry() },
    },

    watch: {
      'instance.menu.isOpen'(newValue) {
        if (newValue) {
          // In case `openMenu()` is just called and the menu is not rendered yet.
          this.$nextTick(this.onMenuOpen)
        } else {
          this.onMenuClose()
        }
      },
    },

    created() {
      this.menuSizeWatcher = null
      this.menuResizeAndScrollEventListeners = null
    },

    mounted() {
      const { instance } = this

      if (instance.menu.isOpen) this.$nextTick(this.onMenuOpen)
    },

    unmounted() {
      this.onMenuClose()
    },

    methods: {
      getTipIcon() {
        const shouldShowSearchPromptTip = this.instance.trigger.searchQuery === '' && !this.instance.defaultOptions
        const shouldShowNoResultsTip = shouldShowSearchPromptTip
            ? false
            : this.entry.isLoaded && this.entry.options.length === 0

        if (shouldShowSearchPromptTip) {
          return 'warning'
        } else if (this.entry.isLoading) {
          return 'loader'
        } else if (this.entry.loadingError) {
          return 'error'
        } else if (shouldShowNoResultsTip) {
          return 'warning'
        }

        return null;
      },
      getTipText() {
        const shouldShowSearchPromptTip = this.instance.trigger.searchQuery === '' && !this.instance.defaultOptions
        const shouldShowNoResultsTip = shouldShowSearchPromptTip
            ? false
            : this.entry.isLoaded && this.entry.options.length === 0

        if (shouldShowSearchPromptTip) {
          return this.instance.searchPromptText
        } else if (this.entry.isLoading) {
          return this.instance.loadingText
        } else if (this.entry.loadingError) {
          return this.entry.loadingError
        } else if (shouldShowNoResultsTip) {
          return this.instance.noResultsText
        }
      },
      getNormalTip() {
        if (this.instance.rootOptionsStates.isLoading) {
          return ['loader', this.instance.loadingText]
        } else if (this.instance.rootOptionsStates.loadingError) {
          return ['error', this.instance.rootOptionsStates.loadingError, this.instance.retryText]
        } else if (this.instance.rootOptionsStates.isLoaded && this.instance.forest.normalizedOptions.length === 0) {
          return ['warning', this.instance.noOptionsText]
        } else if (this.instance.localSearch.noResults) {
          return ['warning', this.instance.noResultsText]
        }

        return null;
      },

      onMenuOpen() {
        this.adjustMenuOpenDirection()
        this.setupMenuSizeWatcher()
        this.setupMenuResizeAndScrollEventListeners()
      },

      onMenuClose() {
        this.removeMenuSizeWatcher()
        this.removeMenuResizeAndScrollEventListeners()
      },

      adjustMenuOpenDirection() {
        const { instance } = this
        if (!instance.menu.isOpen) return

        const $menu = instance.getMenu()
        const $control = instance.getControl()
        const menuRect = $menu.getBoundingClientRect()
        const controlRect = $control.getBoundingClientRect()
        const menuHeight = menuRect.height
        const viewportHeight = window.innerHeight
        const spaceAbove = controlRect.top
        const spaceBelow = window.innerHeight - controlRect.bottom
        const isControlInViewport = (
          (controlRect.top >= 0 && controlRect.top <= viewportHeight) ||
          (controlRect.top < 0 && controlRect.bottom > 0)
        )
        const hasEnoughSpaceBelow = spaceBelow > menuHeight + MENU_BUFFER
        const hasEnoughSpaceAbove = spaceAbove > menuHeight + MENU_BUFFER

        if (!isControlInViewport) {
          instance.closeMenu()
        } else if (instance.openDirection !== 'auto') {
          instance.menu.placement = directionMap[instance.openDirection]
        } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
          instance.menu.placement = 'bottom'
        } else {
          instance.menu.placement = 'top'
        }
      },

      setupMenuSizeWatcher() {
        const { instance } = this
        const $menu = instance.getMenu()

        // istanbul ignore next
        if (this.menuSizeWatcher) return

        this.menuSizeWatcher = {
          remove: watchSize($menu, this.adjustMenuOpenDirection),
        }
      },

      setupMenuResizeAndScrollEventListeners() {
        const { instance } = this
        const $control = instance.getControl()

        // istanbul ignore next
        if (this.menuResizeAndScrollEventListeners) return

        this.menuResizeAndScrollEventListeners = {
          remove: setupResizeAndScrollEventListeners($control, this.adjustMenuOpenDirection),
        }
      },

      removeMenuSizeWatcher() {
        if (!this.menuSizeWatcher) return

        this.menuSizeWatcher.remove()
        this.menuSizeWatcher = null
      },

      removeMenuResizeAndScrollEventListeners() {
        if (!this.menuResizeAndScrollEventListeners) return

        this.menuResizeAndScrollEventListeners.remove()
        this.menuResizeAndScrollEventListeners = null
      },
    },
  }
</script>
