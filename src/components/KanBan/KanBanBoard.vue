<template>
  <v-container>
    <v-card :color="color" height="80dvh" class="d-flex flex-column">
      <v-card-title class="font-weight-bold">Kanban Board</v-card-title>
      <v-card-text class="flex-grow-1 overflow-scroll py-2">
        <v-row class="flex-nowrap">
          <v-col v-for="column in columns" :key="column.id" cols="auto">
            <KanBanColumn :column="column" />
          </v-col>
          <v-col cols="auto">
            <v-container
              class="h-50 border-lg rounded-lg border-success d-flex justify-center align-center cursor-pointer"
              width="240px"
              @click="store.addColumn"
            >
              <span class="text-success font-weight-bold text-h2">+</span>
            </v-container>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const columns = store.columns;

const color = "#F2B8B4";
</script>
