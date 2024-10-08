import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { createVuetify } from "vuetify";
import { components, directives } from "vuetify/dist/vuetify.js";
import KanBanBoard from "./KanBanBoard.vue";

const wrapper = mount(KanBanBoard, {
  global: {
    plugins: [
      createVuetify({ components, directives }),
      createTestingPinia({ createSpy: vi.fn, stubActions: false }),
    ],
  },
});

describe("KanBanBoard", () => {
  it("renders the component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("has an add column button", () => {
    expect(wrapper.find(".v-container.cursor-pointer").exists()).toBe(true);
  });
  it("adds a column when button is clicked", async () => {
    expect(wrapper.findAll("KanBanColumn").length).toBe(3);
    await wrapper.get(".v-container.cursor-pointer").trigger("click");
    expect(wrapper.findAll("KanBanColumn").length).toBe(4);
  });
});
