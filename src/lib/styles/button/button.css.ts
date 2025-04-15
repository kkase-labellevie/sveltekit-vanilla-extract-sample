import { style } from '@vanilla-extract/css'
import { themeColor } from '../theme.css'

const baseButton = style({
  color: 'white',
  // color: 'white',　→ error
  // hoge: 'white', → error
  // プロパティの型チェック

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
  // 擬似クラスはネストできるが、通常のクラスはネストして書くことは不可能
})

const backgroundPrimary = style({
  backgroundColor: themeColor.color.primary, // =red
  // themeColorとして別ファイルに定義しておける
  // bgのような略称は基本的に使えない
})
const superPrimary = style({
  color: 'yellow',
})

const mockPrimary = style({
  color: 'black',
})

const backgroundSecondary = style({
  backgroundColor: themeColor.color.secondary,
})

export const primaryButton = [baseButton, backgroundPrimary]
export const superPrimaryButton = [
  baseButton,
  backgroundPrimary,
  superPrimary,
  //mockPrimary,
]
export const secondaryButton = [baseButton, backgroundSecondary]
