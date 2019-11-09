<template>
  <pre v-text="doc"/>
</template>

<script>
  import { mapProp } from '../store'

  export default {
    name: 'srs-renderer',
    computed: {
      doc: mapProp('doc')
    }
  }
</script>
