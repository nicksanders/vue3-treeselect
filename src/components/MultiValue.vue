<template>
  <TransitionGroup class="vue-treeselect__multi-value" tag="div" name="vue-treeselect__multi-value-item--transition" :appear="true" >
    <MultiValueItem v-for="node in multiValueItems" :key="`multi-value-item-${node.id}`" :node="node" />
    <div v-if="count > 0" class="vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off" key="exceed-limit-tip">
      <span class="vue-treeselect__limit-tip-text">{{ instance.limitText(count) }}</span>
    </div>
    <Placeholder key="placeholder" />
    <Input ref="input" key="input" />
  </TransitionGroup>,
</template>

<script>
  import MultiValueItem from '@/components/MultiValueItem.vue'
  import Input from '@/components/Input.vue'
  import Placeholder from '@/components/Placeholder.vue'
  import { TransitionGroup } from "vue";

  export default {
    name: 'vue-treeselect--multi-value',
    inject: [ 'instance' ],
    components: { Placeholder, TransitionGroup, Input, MultiValueItem },
    computed: {
      multiValueItems() {
        return this.instance.internalValue
            .slice(0, this.instance.limit)
            .map(this.instance.getNode)
      },
      count() {
        return this.instance.internalValue.length - this.instance.limit
      }
    },
  }
</script>
