<script>
export default {
  name: "com",
  inject: ['name', 'userInfo'],
}
</script>

<template>
  <div class="container">
    {{ userInfo }}
  </div>
</template>

<style scoped>
.container {

}
</style>
