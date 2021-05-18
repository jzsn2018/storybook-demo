import  MyButton  from "./src/Button/index.js";
export default {
  title: "Example/Button",
  component: MyButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick1="onClick" v-bind="$props" />',
  methods: {
    onClick(payload) {
      console.log(
        "🚀 ~ file: button.stories.js ~ line 17 ~ methods:{onClick ~ payload",
        payload
      );
    },
  },
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};