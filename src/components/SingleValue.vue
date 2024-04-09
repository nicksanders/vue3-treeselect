<template>
  <div>
    <template v-if="instance.hasValue && !instance.trigger.searchQuery">
      <div class="vue-treeselect__value-container">
        <div class="vue-treeselect__single-value">
          <template v-if="instance.$slots['value-label']">
            {{ instance.$slots['value-label'] }}
          </template>
          <template v-else>{{ node.label }}</template>
        </div>
      </div>
    </template>
    <Placeholder />,
    <Input ref="input" />,
  </div>
</template>

<script>
  import Input from '@/components/Input.vue'
  import Placeholder from '@/components/Placeholder.vue'

  export default {
    name: 'vue-treeselect--single-value',
    inject: [ 'instance' ],
    components: { Placeholder, Input },
  }
</script>
