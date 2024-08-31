import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useAppStore } from "./app";

describe("AppStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("addColumn", () => {
    it("adds a column", () => {
      const store = useAppStore();
      expect(store.columns.length).toBe(3);
      store.addColumn();
      expect(store.columns.length).toBe(4);
    });
  });
  describe("editColumnTitle", () => {
    it("updates the column title", () => {
      const store = useAppStore();
      const col = store.columns[0];
      expect(col.title).toBe("To Do");
      store.editColumnTitle(col.id, "New Title");
      expect(col.title).toBe("New Title");
    });
  });
  describe("addCard", () => {
    it("adds a card", () => {
      const store = useAppStore();
      const col = store.columns[0];
      expect(col.cards.length).toBe(2);
      store.addCard(col.id);
      expect(col.cards.length).toBe(3);
    });
  });
  describe("editCard", () => {
    it("updates the card title", () => {
      const store = useAppStore();
      const col = store.columns[0];
      const card = col.cards[0];
      expect(card.title).toBe("Buy groceries");
      store.editCard(col.id, card.id, { title: "New Title" });
      expect(card.title).toBe("New Title");
    });
    it("updates the card description", () => {
      const store = useAppStore();
      const col = store.columns[0];
      const card = col.cards[0];
      expect(card.title).toBe("Buy groceries");
      store.editCard(col.id, card.id, { description: "New Description" });
      expect(card.description).toBe("New Description");
    });
    it("updates the card title and description", () => {
      const store = useAppStore();
      const col = store.columns[0];
      const card = col.cards[0];
      expect(card.title).toBe("Buy groceries");
      store.editCard(col.id, card.id, {
        title: "New Title",
        description: "New Description",
      });
      expect(card.title).toBe("New Title");
      expect(card.description).toBe("New Description");
    });
  });
});
