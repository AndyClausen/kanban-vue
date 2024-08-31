<template>
  <v-card max-width="344">
    <v-card-title :class="{ 'font-italic': !card.title }">
      <input v-model="title" placeholder="Untitled" />
    </v-card-title>
    <v-card-text
      :class="{
        'font-italic': !card.description,
      }"
    >
      <textarea
        class="w-100 pa-1"
        v-model="description"
        placeholder="No description"
      />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore, type Card } from "@/stores/app";

const { columnId, card } = defineProps<{ columnId: number; card: Card }>();
const store = useAppStore();
const title = ref(card.title);
const description = ref(card.description);

watch(title, () => {
  store.editCard(columnId, card.id, { title: title.value });
});
watch(description, () => {
  store.editCard(columnId, card.id, { description: description.value });
});
</script>
