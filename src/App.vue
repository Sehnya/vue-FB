<template>
  <div id="app">
    <h1>Vue + Firebase App</h1>
    <ul>
      <li v-for="doc in docs" :key="doc.id">
        {{ doc.data.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "App",
  data() {
    return {
      docs: [],
    };
  },
  async mounted() {
    try {
      // Fetch documents from a Firestore collection named "users"
      const querySnapshot = await db.collection("users").get();
      this.docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  },
};
</script>

<style>
/* Your styles here */
</style>
