import { h } from "vue";

export default {
  props: {
    tag: { type: String, required: false, default: "p" },
    text: { type: String, required: true },
    class: { type: String, required: false, default: "" }
  },
  setup(props) {
    return () =>
      h(
        props.tag,
        {
          class: props.class
        },
        props.text
          .split("\n")
          .reduce((accumulator, string) => {
            if (!Array.isArray(accumulator)) {
              return [accumulator, string, h("br")];
            }
            return accumulator.concat([string, h("br")]);
          }, [])
      );
  }
};
