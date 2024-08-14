import { html } from 'lit';
import './Button'; // Adjust the path to where your component is located

export default {
  title: 'Example/Button', // Title in Storybook UI
  component: 'lit-ui-button', // The tag name of your custom element
  argTypes: {
    name: { control: 'text' },
  },
};

const Template = ({ name }: { name: string }) =>
  html`<lit-ui-button .name=${name} />`;

export const Default = Template.bind({});
Default.args = {
  name: 'World',
};

export const CustomName = Template.bind({});
CustomName.args = {
  name: 'Storybook',
};
