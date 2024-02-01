import { TokenColors } from './token-colors';

export default {
  title: 'foundation/Token-colors',
  component: TokenColors,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

// export const gggg = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

export const Colors = {
    args: {
      size: 'large',
      label: 'Button',
    },
    parameters: {
      design: {
        type: "figspec",
        
        url: "https://www.figma.com/file/zgujqRz7dRZAkhjkZtwcLq/Design-System%3A-Tokens?type=design&node-id=363-12638&mode=dev",
        accessToken: "figd_2kyzUmtXaublKRbvM73YLpwW3QjdvQh1KAFn7agu"
      },
    },
    
  };

// export const Colors = {};
