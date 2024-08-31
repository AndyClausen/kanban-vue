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
  describe("addCard", () => {
    it("adds a card", () => {
      const store = useAppStore();
      expect(store.columns[0].cards.length).toBe(2);
      store.addCard(store.columns[0]);
      expect(store.columns[0].cards.length).toBe(3);
    });
  });
});
