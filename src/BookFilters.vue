<template>
  <v-card outlined class="mx-auto" tile>
    <v-card-title class="text-h2">The Library</v-card-title>
    <v-divider />
    <v-row>
      <v-col cols="12">
        <v-toolbar dense flat>
          <v-toolbar-title>Filter by Genre</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text @click="resetFilter" color="red">reset filter</v-btn>
        </v-toolbar>
      </v-col>
      <v-col cols="6" v-for="genre in bookGenre" :key="genre">
        <v-btn
          block
          @click="filterBooksCollections(genre)"
          :color="colorOnSelection(genre)"
          >{{ genre }}
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="mt-2" />
    <v-list two-line>
      <v-list-item-group v-model="selected" active-class="pink--text" multiple>
        <template v-for="(item, index) in filtredBooks">
          <v-list-item :key="item.title" @click="clicked(item)">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-title v-if="active">selected</v-list-item-title>
              
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < filtredBooks.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Genre } from "../src/IBook.interface";
import { bookData } from "../src/bookData";
import { IBook } from "../src/IBook.interface";


@Component({ components: {  } })
export default class BookFilters extends Vue {
  bookGenre: string[] = Object.keys(Genre);
  selected: Array<any> = [];
  booksCollections: Array<any> = [];
  filtredBooks: IBook[] = bookData();
  selectedBooks: Array<string> = [];
  books: IBook[] = bookData();

  filterBooksCollections(value: string) {
    this.selectedBooks = [];
    this.selected=[]
    this.$emit("update:selectedbook", this.selectedBooks);
    return (this.filtredBooks = this.books.filter(
      (x: any) => x.genre === value
    ));
  }

  colorOnSelection(genre1: string) {
    var checkSelection = this.filtredBooks.map((g: any) => g.genre);
    let existingIndex = checkSelection.findIndex((x: any) => x == genre1);
    return existingIndex !== -1 ? "primary" : "";
  }

  resetFilter() {
    this.selectedBooks = [];
    this.selected=[]
    this.$emit("update:selectedbook", this.selectedBooks);
    return (this.filtredBooks = this.books);
  }

  clicked(book: any) {
    let existingIndex = this.selectedBooks.findIndex((x: any) => x == book);
    existingIndex === -1
      ? this.selectedBooks.push(book)
      : this.selectedBooks.splice(existingIndex, 1);

   return this.$emit("update:selectedbook", this.selectedBooks);
  }

}
</script>

