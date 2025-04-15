import { recipe } from '@vanilla-extract/recipes'
import { recipeVerThemeColor } from '../theme.css'

export const recipeVerButton = recipe({
  base: {
    color: 'white',
    display: 'block',
    width: '100%',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    boxSizing: 'border-box',
    ':hover': {
      opacity: 0.9,
    },
    ':active': {
      opacity: 0.8,
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: recipeVerThemeColor.color.primary,
      },
      secondary: {
        backgroundColor: recipeVerThemeColor.color.secondary,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
