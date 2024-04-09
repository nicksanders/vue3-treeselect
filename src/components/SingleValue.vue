<template>
  <div style="height: 100%">
    <template v-if="hasValue && !hasActiveQuery">
      <div class="vue-treeselect__value-container">
        <div class="vue-treeselect__single-value s-value-container">
          <template v-if="instance.$slots['value-label']">
            {{ instance.$slots['value-label'] }}
          </template>
          <template v-else>{{ node.label }}</template>
        </div>
      </div>
    </template>
    <Placeholder class="s-value-container" v-if="!hasValue && !hasActiveQuery"/>
    <Input ref="input" />
  </div>
</template>

<script>
  import Input from '@/components/Input.vue'
  import Placeholder from '@/components/Placeholder.vue'

  export default {
    name: 'vue-treeselect--single-value',
    inject: [ 'instance' ],
    components: { Placeholder, Input },
    computed: {
      node() {
        return this.instance.selectedNodes.value[0];
      },
      hasValue() {
        return  this.instance.hasValue.value;
      },
      hasActiveQuery() {
        return this.instance.trigger.searchQuery;
      }
    }
  }
</script>
