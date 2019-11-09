<template>
  <b-form>
    <srs-input-group label="Non-Functional">
      <b-form-group label="Performance" description="If there are performance requirements for the product under various circumstances, state them here and explain their rationale.">
        <b-textarea v-model="data.performance"></b-textarea>
      </b-form-group>
      <b-form-group label="Security" description="Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product.">
        <b-textarea v-model="data.security"></b-textarea>
      </b-form-group>
    </srs-input-group>
    <srs-input-group label="Other" description="Define any other requirements not covered elsewhere in the SRS This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on.">
      <b-form-group>
        <b-textarea v-model="data.other"></b-textarea>
      </b-form-group>
    </srs-input-group>
  </b-form>
</template>

<script>
  export default {
    name: 'srs-other',
    data () {
      return {
        data: {
          performance: '',
          security: '',
          other: ''
        }
      }
    }
  }
</script>
