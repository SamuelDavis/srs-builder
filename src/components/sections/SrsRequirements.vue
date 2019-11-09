<template>
  <b-form>
    <srs-input-group label="Non-Functional">
      <b-form-group description="If there are performance requirements for the product under various circumstances, state them here and explain their rationale." label="Performance">
        <b-textarea v-model="performance"/>
      </b-form-group>
      <b-form-group description="Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product." label="Security">
        <b-textarea v-model="security"/>
      </b-form-group>
    </srs-input-group>
    <srs-input-group description="Define any other requirements not covered elsewhere in the SRS This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on." label="Other">
      <b-form-group>
        <b-textarea v-model="other"/>
      </b-form-group>
    </srs-input-group>
  </b-form>
</template>

<script>
  import { mapProp } from '../../store'

  export default {
    name: 'srs-other',
    computed: {
      performance: mapProp('doc.performance'),
      security: mapProp('doc.security'),
      other: mapProp('doc.other')
    }
  }
</script>
