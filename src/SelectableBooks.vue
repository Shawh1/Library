<template>
  <v-container fluid>
    <v-card flat>
      <v-row dense>
        <v-col v-for="card in selectionDetails" :key="card" :cols="6">
          <v-list subheader dense>
            <v-header>{{ card }}</v-header>

            <v-list-item v-for="file in selection" :key="file.title">
              <v-list-item-content>
                <v-list-item-title
                  v-text="card === 'Selected Titles' ? file.title : file.id"
                ></v-list-item-title>
              </v-list-item-content>
              <v-divider vertical></v-divider>
            </v-list-item>
            <v-divider
              v-if="index < selection.length - 1"
              :key="index"
            ></v-divider>
          </v-list>
        </v-col>
        <v-card-text class="justify-right">
          {{ `Total number of pages in selected books: ${totalPages}` }}
        </v-card-text>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class SelectableBooks extends Vue {
  @Prop({
    type: Array,
    default: [""] as any,
  })
  selection!: any;
  @Prop({ type: Number, default: 0 as number }) totalPages!: any;
  selectionDetails: Array<string> = ["Selected Titles", "Selected IDs"];
}
</script>

