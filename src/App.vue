<template>
  <div>
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/commons/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style></style>
