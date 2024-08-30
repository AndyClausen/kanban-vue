<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title>{{ card.title }}</v-card-title>
    <v-card-text>{{ card.description }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Card } from "@/stores/app";

const { card } = defineProps<{ card: Card }>();
</script>
