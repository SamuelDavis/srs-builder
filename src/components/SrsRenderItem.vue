<template>
  <div>
    <ol v-if="value instanceof Array">
      <li :key="i" v-for="(item, i) in value">
        <h2 :id="genId(i)" v-text="item.label"/>
        <srs-render-item :index="genId(i)" v-bind="item"/>
      </li>
    </ol>
    <p v-else-if="typeof value === 'string'" v-text="value"/>
    <pre v-else v-text="JSON.stringify(value, null, 2)"/>
  </div>
</template>

<script>
  export default {
    name: 'srs-render-item',
    props: {
      index: String,
      value: [String, Array, Object],
      label: String
    },
    components: {},
    methods: {
      genId (i) {
        return this.index ? `${this.index}.${i}` : i.toString()
      }
    }
  }
</script>

<style lang="scss">
  pre {
    border: 0;
  }
</style>
