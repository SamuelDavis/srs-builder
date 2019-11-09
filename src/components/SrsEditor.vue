<template>
  <b-card no-body>
    <b-tabs card justified>
      <b-tab title="Title">
        <srs-title/>
      </b-tab>
      <b-tab title="Summary">
        <srs-summary/>
      </b-tab>
      <b-tab title="Stories">
        <srs-stories/>
      </b-tab>
      <b-tab title="Requirements">
        <srs-requirements/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
  import SrsTitle from './sections/SrsTitle.vue'
  import SrsSummary from './sections/SrsSummary.vue'
  import SrsStories from './sections/SrsStories.vue'
  import SrsRequirements from './sections/SrsRequirements.vue'

  export default {
    name: 'srs-editor',
    components: {
      'srs-title': SrsTitle,
      'srs-summary': SrsSummary,
      'srs-stories': SrsStories,
      'srs-requirements': SrsRequirements
    },
  }
</script>
