import { style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'

export const sprinklesVerButton = style([
  sprinkles({
    backgroundColor: 'pink',
    color: 'black',
    display: 'block',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    p: '12px', // padding
    txtaaaa: 'center', // textAlign
  }),
  {
    border: 'none', // 1px solid red;
    borderRadius: '0px',
    textDecoration: 'none',
    boxSizing: 'border-box',
    ':hover': {
      opacity: 0.9,
    },
    ':active': {
      opacity: 0.8,
    },
    selectors: {
      '.light &': {
        backgroundColor: '#E6E0D6',
        color: 'black',
      },
    },
  },
])
