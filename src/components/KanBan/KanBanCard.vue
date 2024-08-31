<template>
  <v-card max-width="344">
    <v-card-title :class="{ 'font-italic': !card.title }">{{
      card.title || "Untitled"
    }}</v-card-title>
    <v-card-text
      :class="{
        'font-italic': !card.description,
      }"
      >{{ card.description || "No description" }}</v-card-text
    >
  </v-card>
</template>

<script setup lang="ts">
import type { Card } from "@/stores/app";

const { card } = defineProps<{ card: Card }>();
</script>
