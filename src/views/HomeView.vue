<template>
  <div class="home">
    <h1>Home</h1>
    <p>Welcome to the Home page!</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["message"]),
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  font-family: "Arial", sans-serif;
}
</style>
