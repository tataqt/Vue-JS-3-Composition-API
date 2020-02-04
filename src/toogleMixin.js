export default {
    data: () => ({
        visible: false
    }),
    methods: {
        toogle() {
            this.visible = !this.visible;
        }
    }
}
