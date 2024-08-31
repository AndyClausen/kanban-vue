import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { createVuetify } from "vuetify";
import { components, directives } from "vuetify/dist/vuetify.js";
import KanBanCard from "./KanBanCard.vue";

const wrapper = mount(KanBanCard, {
  global: {
    plugins: [createVuetify({ components, directives })],
  },
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
