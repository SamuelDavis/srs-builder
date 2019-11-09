<template>
  <b-container id="app" class="mt-5">
    <srs-editor v-show="!printing"/>
    <srs-renderer v-if="printing"/>
  </b-container>
</template>

<script>
  import SrsEditor from './components/SrsEditor.vue'
  import SrsRenderer from './components/SrsRenderer.vue'

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
    data () {
      return {
        printing: false
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
