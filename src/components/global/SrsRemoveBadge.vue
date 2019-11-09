<template>
  <div class="srs-center">
    <b-badge href="#" variant="danger" @click="click">&minus;</b-badge>
  </div>
</template>

<script>
  export default {
    name: 'srs-remove-badge',
    props: {
      click: Function
    }
  }
</script>
