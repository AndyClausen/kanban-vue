<template>
  <v-card :color="color" max-width="344">
    <v-card-title>{{ column.title }}</v-card-title>
    <v-card-text>
      <v-container>
        <draggable
          :list="column.cards"
          itemKey="id"
          group="cards"
          @end="onDragEnd"
        >
          <template #item="{ element: card }">
            <v-row>
              <v-col cols="12">
                <KanBanCard :card="card" />
              </v-col>
            </v-row>
          </template>
          <template #footer>
            <v-row>
              <v-col cols="12">
                <v-container
                  class="border-lg rounded-lg border-success d-flex justify-center align-center cursor-pointer"
                  width="100%"
                  height="80px"
                >
                  <span class="text-success font-weight-bold text-h2">+</span>
                </v-container>
              </v-col>
            </v-row>
          </template>
        </draggable>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import type { Column } from "@/stores/app";

const { column } = defineProps<{ column: Column }>();

const color = "#FFECBE";

function onDragEnd(event: DragEvent) {
  console.log("event", event);
}
</script>
