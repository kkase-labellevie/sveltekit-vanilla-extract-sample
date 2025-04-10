// src/styles/loginForm.css.ts

import { style } from '@vanilla-extract/css'

// <main> 要素に適用: 全体のコンテナ、中央配置
export const mainContainer = style({
  maxWidth: '400px', // フォームの最大幅（デザインに合わせて調整）
  margin: '60px auto', // 上下にマージン、左右autoで中央揃え
  padding: '20px', // 内側の余白（任意）
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // h1, form, パスワードリンクを中央揃え
})

// <h1> 要素に適用: タイトル
export const title = style({
  marginBottom: '32px', // フォームとの間の余白
  fontSize: '24px', // フォントサイズ（デザインに合わせて調整）
  fontWeight: 'bold', // 太字
  color: '#333', // 文字色（デザインに合わせて調整）
  textAlign: 'center',
})

// <form> 要素に適用: フォーム全体のスタイル
export const formStyle = style({
  width: '100%', // 親要素(mainContainer)に対して幅100%
  display: 'flex',
  flexDirection: 'column',
  gap: '24px', // 各フォーム要素(div)間の垂直方向の隙間
})

// 各フォームコントロール(Input, Checkbox, Button)を囲む <div> に適用（共通）
// gapを使用するため、個別のマージン指定は基本的に不要
export const formField = style({
  width: '100%', // formのalignItemsの影響を受けないようにするためwidthを指定
})

// Checkbox を囲む <div> に適用 (必要なら特定のスタイルを追加)
// formがwidth: 100% なので、Checkboxコンポーネントが左寄せならこのままでOK
export const checkboxField = style([
  formField,
  // { // 例: チェックボックスだけ左に寄せたい場合など (今回は不要そう)
  //   alignSelf: 'flex-start',
  // }
])

// Button を囲む <div> に適用
export const buttonField = style([
  formField,
  // 必要であれば追加スタイル
])

// Buttonコンポーネント自体に適用するクラス (width: 100%を実現)
// 既存のButtonスタイルを上書きまたは組み合わせる
export const fullWidthButton = style({
  width: '100%',
  // 既存のButtonスタイルで display: inline-block などが指定されている場合、
  // blockにしないとwidth: 100%が効かないことがある
  display: 'block', // または 'inline-block' のまま width: 100% が効くか確認
})

// パスワード忘れリンクを囲む <div> に適用
export const forgotPasswordContainer = style({
  marginTop: '24px', // フォームからの上の余白
  textAlign: 'center',
})

// パスワード忘れリンク <a> 要素に適用
export const forgotPasswordLink = style({
  color: '#C9302C', // 画像に合わせた赤系の色
  textDecoration: 'none',
  fontSize: '14px', // フォントサイズ（デザインに合わせて調整）

  ':hover': {
    textDecoration: 'underline',
  },
})
