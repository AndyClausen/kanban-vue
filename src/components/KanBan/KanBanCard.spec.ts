import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import KanBanCard from "./KanBanCard.vue";

const wrapper = mount(KanBanCard, {
  props: {
    card: {
      id: 1,
      title: "Card 1",
      description: "Description 1",
    },
  },
});

describe("KanBanCard", () => {
  it("renders the component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
