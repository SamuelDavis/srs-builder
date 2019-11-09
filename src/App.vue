<template>
  <b-container id="app" class="mt-5">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Title">
          <srs-title/>
        </b-tab>
        <b-tab title="Summary">
          <srs-summary/>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
  import SrsTitle from './components/SrsTitle.vue'
  import SrsSummary from './components/SrsSummary.vue'

  export default {
    name: 'app',
    components: {
      'srs-title': SrsTitle,
      'srs-summary': SrsSummary
    }
  }
</script>

<style lang="scss">
  .form-group {
    width: 100%;
  }

  .srs-center {
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
  }
</style>
