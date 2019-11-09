<template>
  <b-container id="app" class="mt-5">
    <srs-editor v-show="!printing"/>
    <srs-renderer v-if="printing"/>
  </b-container>
</template>

<script>
  import SrsEditor from './components/SrsEditor.vue'
  import SrsRenderer from './components/SrsRenderer.vue'
  import { getters, mutations } from './store'

  export default {
    name: 'app',
    components: {
      'srs-editor': SrsEditor,
      'srs-renderer': SrsRenderer
    },
    mounted () {
      window.addEventListener('beforeprint', () => this.printing = true)
      window.addEventListener('afterprint', () => this.printing = false)
    },
    computed: {
      printing: {
        get () {
          return this.$store.getters[getters.getPrinting.name]
        },
        set (v) {
          return this.$store.commit(mutations.setPrinting.name, v)
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-group {
    width: 100%;
  }

  .list-group-item {
    padding-left: 0;
    padding-right: 0;
  }

  .srs-center {
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
  }
</style>
