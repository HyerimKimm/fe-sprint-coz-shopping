/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark', // 기본 배경색을 어둡게 설정
      values: [
        { name: 'dark', value: '#888' }, // 어두운 배경색 추가
        // 다른 배경색 설정도 추가할 수 있습니다.
      ],
    },
  },
};

export default preview;
