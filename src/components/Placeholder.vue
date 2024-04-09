<template>
  <div :class="{'vue-treeselect__placeholder': true,
  'vue-treeselect-helper-zoom-effect-off': true,
  'vue-treeselect-helper-hide': instance.hasValue || instance.trigger.searchQuery,}" >
    {{ instance.placeholder }}
  </div>
</template>

<script>
  export default {
    name: 'vue-treeselect--placeholder',
    inject: [ 'instance' ],
  }
</script>
