// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const presets = [
  [
    'taro',
    {
      framework: 'react',
      ts: true
    },
  ],
];
const plugins = [
  [
    'import',
    {
      libraryName: 'taro-hooks',
      camel2DashComponentName: false
    },
    'taro-hooks',
  ]
];
export {
  presets,
  plugins
}
