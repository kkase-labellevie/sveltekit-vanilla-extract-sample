import { createGlobalTheme } from '@vanilla-extract/css'

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
