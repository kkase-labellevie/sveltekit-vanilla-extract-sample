import { style } from '@vanilla-extract/css'

export const buttonBase = style({
  padding: '12px 24px',
  borderRadius: '0.375rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '16px',
  display: 'block',
  width: '100%',
  textAlign: 'center',
  textDecoration: 'none',
  boxSizing: 'border-box',
})

export const buttonOn = style([
  buttonBase,
  {
    backgroundColor: 'green', // 緑色
    color: '#ffffff',
  },
])

export const buttonOff = style([
  buttonBase,
  {
    backgroundColor: 'red', // 赤色
    color: '#ffffff',
  },
])
