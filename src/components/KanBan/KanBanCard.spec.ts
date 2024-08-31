import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { createVuetify } from "vuetify";
import { components, directives } from "vuetify/dist/vuetify.js";
import KanBanCard from "./KanBanCard.vue";
import { useAppStore } from "@/stores/app";

const pinia = createTestingPinia({ createSpy: vi.fn, stubActions: false });
const store = useAppStore(pinia);
const wrapper = mount(KanBanCard, {
  global: {
    plugins: [createVuetify({ components, directives }), pinia],
  },
  props: {
    columnId: 1,
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
  it("updates the card title", async () => {
    expect(wrapper.find("input").element.value).toBe("Card 1");
    await wrapper.find("input").setValue("New Title");
    expect(wrapper.find("input").element.value).toBe("New Title");
    expect(store.columns[0].cards[0].title).toBe("New Title");
  });
  it("updates the card description", async () => {
    expect(wrapper.find("textarea").element.value).toBe("Description 1");
    await wrapper.find("textarea").setValue("New Description");
    expect(wrapper.find("textarea").element.value).toBe("New Description");
    expect(store.columns[0].cards[0].description).toBe("New Description");
  });
});
