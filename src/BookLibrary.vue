<template>
  <v-card :max-height="maxHeight">
    <BookFilters @update:selectedbook="selection"></BookFilters>
    <SelectableBooks
      :selection="bookSelected"
      :totalPages="totalPages"
    ></SelectableBooks>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import SelectableBooks from "../src/SelectableBooks.vue";
import BookFilters from "../src/BookFilters.vue";
import { sumMethod } from "../src/generalHelper"
const offset= 10;
@Component({
  components: {
    SelectableBooks,
    BookFilters,
  },
})
export default class BookLibrary extends Vue {
  bookSelected: Array<any> = [];
  totalPages: number = 0;

get maxHeight(){
  return window.innerHeight-offset
}
  selection(value: any) {
    this.bookSelected = value;
    this.totalPages = sumMethod(this.bookSelected, "numberOfPages");
  }
 
}
</script>



