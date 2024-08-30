<template>
  <v-card :color="color" max-width="344">
    <v-card-title>{{ column.title }}</v-card-title>
    <v-card-text>
      <v-container dropzone="move">
        <v-row v-for="card in column.cards" :key="card.id">
          <v-col cols="12">
            <KanBanCard :card="card" />
          </v-col>
        </v-row>
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
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Column } from "@/stores/app";

const { column } = defineProps<{ column: Column }>();

const color = "#FFECBE";
</script>
