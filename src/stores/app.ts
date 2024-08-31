// Utilities
import { defineStore } from "pinia";

export interface Column {
  id: number;
  title: string;
  cards: Card[];
}

export interface Card {
  id: number;
  title: string;
  description: string;
}

export const useAppStore = defineStore("app", {
  state: () => ({
    columns: [
      {
        id: 1,
        title: "To Do",
        cards: [
          {
            id: 1,
            title: "Buy groceries",
            description: "Milk, eggs, bread, and butter",
          },
          {
            id: 2,
            title: "Pay Rent",
            description: "Monthly rent for a small apartment",
          },
        ],
      },
      {
        id: 2,
        title: "Doing",
        cards: [
          {
            id: 3,
            title: "Clean the house",
            description: "Dust, vacuum, sweep, mop",
          },
          {
            id: 4,
            title: "Mow the lawn",
            description: "Trim the grass, weed the flowers",
          },
        ],
      },
      {
        id: 3,
        title: "Done",
        cards: [
          {
            id: 5,
            title: "Prepare for the weekend",
            description: "Pack for the trip, buy tickets",
          },
          {
            id: 6,
            title: "Watch the sunset",
            description: "Relax, unwind, and enjoy the beauty",
          },
        ],
      },
    ],
    cardCount: 6,
  }),
  actions: {
    addColumn() {
      this.columns.push({
        id: this.columns.length + 1,
        title: "",
        cards: [],
      });
    },
    editColumnTitle(columnId: number, title: string) {
      const col = this.columns.find((column) => column.id === columnId);
      if (!col) {
        return;
      }
      col.title = title;
    },
    addCard(columnId: number) {
      const col = this.columns.find((column) => column.id === columnId);
      if (!col) {
        return;
      }
      col.cards.push({
        id: this.cardCount + 1,
        title: "",
        description: "",
      });
      this.cardCount++;
    },
    editCard(
      columnId: number,
      cardId: number,
      updatedProps: Omit<Partial<Card>, "id">
    ) {
      const col = this.columns.find((column) => column.id === columnId);
      if (!col) {
        return;
      }
      const card = col.cards.find((card) => card.id === cardId);
      if (!card) {
        return;
      }
      Object.assign(card, updatedProps);
    },
  },
});
