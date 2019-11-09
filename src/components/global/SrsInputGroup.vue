<template>
  <b-form-group>
    <h3 v-if="label" v-text="label"></h3>
    <b-form-text class="mb-2" v-if="description" v-text="description"></b-form-text>
    <slot></slot>
  </b-form-group>
</template>

<script>
  export default {
    name: 'srs-input-group',
    props: {
      label: String,
      description: String
    }
  }
</script>
