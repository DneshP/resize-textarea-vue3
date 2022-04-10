import ResizeTextarea from './components/ResizeTextarea.vue'

export default {
    install: (app, options) => {
        app.component("resize-textarea", ResizeTextarea)
    },
}