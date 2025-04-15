// src/styles/loginForm.css.ts

import { style } from '@vanilla-extract/css'

export const hrLine = style({
  width: '100%',
  maxWidth: '400px',
  height: '3px',
  backgroundColor: 'black',
  border: 'none',
  margin: '20px auto',
})

export const mainContainer = style({
  maxWidth: '400px',
  margin: '60px auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const title = style({
  marginBottom: '32px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
})

export const formStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const formField = style({
  width: '100%',
})

export const checkboxField = style([formField])

export const buttonField = style([formField])

export const fullWidthButton = style({
  width: '100%',
  display: 'block',
})

export const forgotPasswordContainer = style({
  marginTop: '24px',
  textAlign: 'center',
})

export const forgotPasswordLink = style({
  color: '#C9302C',
  textDecoration: 'none',
  fontSize: '14px',
  ':hover': {
    textDecoration: 'underline',
  },
})
