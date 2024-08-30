<template>
  <v-container>
    <v-card class="mx-auto" max-width="100%">
      <v-card-title>Kanban Board</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="column in columns" :key="column.id" cols="auto">
              <KanBanColumn :column="column" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const columns = store.columns;
</script>
