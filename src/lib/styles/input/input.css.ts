import { style } from '@vanilla-extract/css'

export const input = style({
  border: 'none', // デフォルトのボーダーをすべて削除
  borderBottom: '1px solid #cccccc', // 下線のみ設定 (色は薄いグレー #ccc)
  padding: '8px 0', // 上下のパディングを8px、左右は0に（見た目に合わせて調整）
  fontSize: '16px', // フォントサイズ (適宜調整)
  backgroundColor: 'transparent', // 背景色を透明に
  outline: 'none', // フォーカス時のアウトライン（青い枠など）を非表示に
  width: '100%', // 幅を親要素いっぱいに広げる（必要に応じて調整）

  // プレースホルダーのスタイル
  '::placeholder': {
    color: '#cccccc', // プレースホルダー文字の色を薄いグレーに
    opacity: 1, // 一部のブラウザ対策で不透明度を1に
  },

  // フォーカス時の下線のスタイル（任意）
  ':focus': {
    borderBottomColor: '#a0a0a0', // 例: フォーカス時に少し濃いグレーに変更
  },
})
