import { ref } from "@vue/composition-api";
export function useToogle() {
    const visible = ref(true);
    const toogle = () => {
        visible.value = !visible.value;
    };
    return { visible, toogle }
}