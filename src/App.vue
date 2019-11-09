<template>
  <b-container id="app" class="mt-5">
    <h1 v-if="printing">Hello, world!</h1>
    <b-card no-body v-show="!printing">
      <b-tabs card>
        <b-tab title="Title">
          <srs-title/>
        </b-tab>
        <b-tab title="Summary">
          <srs-summary/>
        </b-tab>
        <b-tab title="Stories">
          <srs-stories/>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
  import SrsTitle from './components/sections/SrsTitle.vue'
  import SrsSummary from './components/sections/SrsSummary.vue'
  import SrsStories from './components/sections/SrsStories.vue'

  export default {
    name: 'app',
    components: {
      'srs-title': SrsTitle,
      'srs-summary': SrsSummary,
      'srs-stories': SrsStories
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
