import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { createVuetify } from "vuetify";
import { components, directives } from "vuetify/dist/vuetify.js";
import KanBanColumn from "./KanBanColumn.vue";
import { useAppStore } from "@/stores/app";

const pinia = createTestingPinia({ createSpy: vi.fn, stubActions: false });
const store = useAppStore(pinia);
const wrapper = mount(KanBanColumn, {
  global: {
    plugins: [createVuetify({ components, directives }), pinia],
  },
  props: {
    column: store.columns[0],
  },
});

describe("KanBanColumn", () => {
  it("renders the component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("has an add card button", () => {
    expect(wrapper.find(".v-container.cursor-pointer").exists()).toBe(true);
  });
  it("adds a card when button is clicked", async () => {
    expect(wrapper.findAll("KanBanCard").length).toBe(2);
    await wrapper.get(".v-container.cursor-pointer").trigger("click");
    expect(wrapper.findAll("KanBanCard").length).toBe(3);
  });
});
