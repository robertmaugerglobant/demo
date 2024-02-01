import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Foundation/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
  parameters: {
    design: {
      type: "figspec",
      
      url: "https://www.figma.com/file/Lss6kFA8LivdZxt8d65wiN/Untitled?type=design&node-id=1-3&mode=dev",
      accessToken: "figd_2kyzUmtXaublKRbvM73YLpwW3QjdvQh1KAFn7agu"
    },
  },
  
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/Lss6kFA8LivdZxt8d65wiN/Untitled?type=design&node-id=1-3&mode=dev",
      accessToken: "figd_2kyzUmtXaublKRbvM73YLpwW3QjdvQh1KAFn7agu"
    },
  },
};
