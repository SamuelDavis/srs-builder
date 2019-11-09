<template>
  <div class="srs-center">
    <b-badge tabindex="-1" href="#" variant="danger" @click="click">&minus;</b-badge>
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
