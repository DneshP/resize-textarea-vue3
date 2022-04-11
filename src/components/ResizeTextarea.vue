<template>
  <textarea
    :style="styles"
    ref="textarea"
    :rows="rows"
    :cols="cols"
    :placeholder="placeholder"
    wrap="hard"
    @focus="resize"
    v-model="textareaContent"
  ></textarea>
</template>

<script>
import { nextTick } from "vue";

/**
 * Resize textarea
 * @author Dinesh Paradesi Vadamodula
 * @displayName Resize Textarea
 */
export default {
  name: "ResizeTextarea",
  props: {
    /**
     * Placeholder text
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Number of rows
     */
    rows: {
      type: Number,
      default: 2,
    },
    /**
     * Number of columns
     */
    cols: {
      type: Number,
      default: 0,
    },
    /**
     * Mininum height of the textarea
     */
    minHeight: {
      type: Number,
      default: 50,
    },
    /**
     * Maximum height of the textarea
     */
    maxHeight: {
      type: Number,
      default: null,
    },
    /**
     * The textarea value 
     */
    modelValue: {
      type: [String, Number],
      default: "",
    },
    /**
     * The resize handle is disabled by default
     */
    autoResize: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      textareaContent: "",
      height: "",
      isScrollEnabled: false,
    };
  },
  computed: {
    styles() {
      return {
        resize: this.autoResize ? "none !important" : "",
        padding: `5${this.unit}`,
        height: this.height,
        overflow: `${this.isScrollEnabled ? "scroll" : "hidden"} !important`,
      };
    },
    unit() {
      return "px";
    },
  },
  watch: {
    textareaContent() {
      /**
       * update modelValue event.
       * 
       * @event update:modelValue
       * @type {string}
       */
      this.$emit("update:modelValue", this.textareaContent);
      this.resize();
    },
  },
  methods: {
    resize() {
      const element = this.$refs.textarea;
      this.height = "auto !important";
      nextTick(() => {
        if (this.minHeight) {
          this.height = `${element.scrollHeight < this.minHeight ? this.minHeight : element.scrollHeight}${this.unit}`
        }
        if (this.maxHeight) {
          if (element.scrollHeight > this.maxHeight) {
            this.height = `${this.maxHeight}${this.unit}`;
            this.isScrollEnabled = true;
          } else {
            this.isScrollEnabled = false;
          }
        }
      })
    },
  },
  created() {
    this.textareaContent = this.modelValue;
  },
  mounted() {
    this.resize();
  },
};
</script>
