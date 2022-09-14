<template>
  <v-app>
    <div id="app" class="app-container">
      <BookLibrary  />
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BookLibrary from "./BookLibrary.vue";
@Component({
  components: {
    BookLibrary,   
  },
})
export default class App extends Vue {
 
}
</script>

<style>
.app-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;
  width: 100%;
  position: relative;
}
</style>

