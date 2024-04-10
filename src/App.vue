<template>
  <div>
    <div>SINGLE VALUE</div>

    <Treeselect v-model="test" :options="options"
                @open="e => handleEvent(e, 'open')"
                @close="e => handleEvent(e, 'close')"
                :clear-on-select="false"
                @update:model-value="e => handleEvent(e, 'update')"
                @select="e => handleEvent(e, 'select')"
                @deselect="e => handleEvent(e, 'deselect')"
                @search-change="e => handleEvent(e, 'search-change')"
                :close-on-select="false"
    >
      <template #before-list>
        <div>Before List</div>
      </template>
      <template #after-list>
        <div>After List</div>
      </template>
      <template #option-label="{ node, shouldShowCount, count }">
        <div>{{ node.id }} {{ shouldShowCount }} {{ count }}</div>
      </template>
      <template #value-label="{ node }">
        <div>{{ node.id }}</div>
      </template>
    </Treeselect>

    <div>MULTIPLE VALUE</div>

    <Treeselect v-model="test2" :options="options"
                :multiple="true"
                @open="e => handleEvent(e, 'open')"
                @close="e => handleEvent(e, 'close')"
                @update:model-value="e => handleEvent(e, 'update')"
                @select="e => handleEvent(e, 'select')"
                @deselect="e => handleEvent(e, 'deselect')"
                @search-change="e => handleEvent(e, 'search-change')"
    />
  </div>
</template>

<script>
import Treeselect from "@/components/Treeselect.vue";
export default {
  components: { Treeselect },
  data() {
    return {
      test: 'b',
      test2: ['b', 'c'],
      options: [ {
        id: 'a',
        label: 'a',
        children: [ {
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        } ],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      } ],
    }
  },
  methods: {
    handleEvent(event, type) {
      console.log(event, type);
    }
  },
  watch: {
    test(val, oVal) {
      console.log(val, oVal);
    },
    test2(val, oVal) {
      console.log(val, oVal);
    }
  }
};
</script>

<style lang="scss">
html {
  min-height: 100%;
  position: relative;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
