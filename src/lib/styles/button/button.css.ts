import { style } from '@vanilla-extract/css'

export const button = style({
  display: 'block', // ブロック要素に変更し、親要素の幅を利用できるようにする
  width: '100%', // ★ 親要素の幅いっぱいに広げる設定を追加
  padding: '12px 24px', // 上下のパディングは維持
  backgroundColor: '#C9302C',
  color: 'white',
  border: 'none',
  borderRadius: '0px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',

  // ★ paddingを含めてwidth: 100%にするため、box-sizingを追加推奨
  boxSizing: 'border-box',

  ':hover': {
    opacity: 0.9,
  },

  ':active': {
    opacity: 0.8,
  },
})
