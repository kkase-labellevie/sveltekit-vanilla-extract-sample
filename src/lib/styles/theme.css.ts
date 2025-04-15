import { createGlobalTheme, createTheme } from '@vanilla-extract/css'

// どこでも使えるグローバルなCSS変数を定義する
// 全体で使いたい共通スタイルトークンとして利用可能
export const themeColor = createGlobalTheme(':root', {
  color: {
    primary: 'red',
    secondary: 'blue',
  },
})

export const recipeVerThemeColor = createGlobalTheme(':root', {
  color: {
    primary: 'green',
    secondary: 'gray',
  },
})

// クラスを付けたときだけ有効になるテーマ変数を定義する
export const [darkTheme, darkThemeColor] = createTheme({
  color: {
    backgroundColor: 'black',
    textColor: 'pink',
  },
})
