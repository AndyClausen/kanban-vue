<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title>{{ column.title }}</v-card-title>
    <v-card-text>
      <v-container dropzone="move">
        <v-row v-for="card in column.cards" :key="card.id">
          <v-col cols="12">
            <KanBanCard :card="card" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Column } from "@/stores/app";

const { column } = defineProps<{ column: Column }>();
</script>
