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
        <b-tab title="Stories">
          <srs-stories/>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
  import SrsTitle from './components/SrsTitle.vue'
  import SrsSummary from './components/SrsSummary.vue'
  import SrsStories from './components/SrsStories.vue'

  export default {
    name: 'app',
    components: {
      'srs-title': SrsTitle,
      'srs-summary': SrsSummary,
      'srs-stories': SrsStories
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
