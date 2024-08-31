import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import KanBanColumn from "./KanBanColumn.vue";

const wrapper = mount(KanBanColumn, {
  props: {
    column: {
      id: 1,
      title: "To Do",
      cards: [{ id: 1, title: "Card 1", description: "Description 1" }],
    },
  },
});

describe("KanBanColumn", () => {
  it("renders the component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("has an add card button", () => {
    expect(wrapper.find("v-container.cursor-pointer").exists()).toBe(true);
  });
  it("adds a card when button is clicked", async () => {
    expect(wrapper.findAll("KanBanCard").length).toBe(1);
    await wrapper.get("v-container.cursor-pointer").trigger("click");
    expect(wrapper.findAll("KanBanCard").length).toBe(2);
  });
});
