// src/styles/checkbox.css.ts または任意のパス

import { style, globalStyle } from '@vanilla-extract/css'

// ラベル全体のスタイル
export const checkboxContainer = style({
  display: 'inline-flex', // 要素を横並びに配置
  alignItems: 'center', // 要素を垂直方向中央に揃える
  cursor: 'pointer', // カーソルをポインターにする
  userSelect: 'none', // テキスト選択を無効化（任意）
})

// 見た目上のチェックボックス（枠）
export const customCheckbox = style({
  display: 'inline-block',
  width: '16px', // 枠の幅
  height: '16px', // 枠の高さ
  border: '1px solid #ccc', // 枠線のスタイル（色を調整）
  marginRight: '8px', // 右側のテキストとの間隔
  position: 'relative', // チェックマークの位置決めの基準とする
  backgroundColor: 'white', // 背景色
  flexShrink: 0, // コンテナが縮小してもチェックボックスは縮まないように
})

// チェックマーク（通常は非表示）
// ここでは CSSのborderを使ってチェックマークを表現します
export const checkmark = style({
  display: 'none', // 通常は非表示
  position: 'absolute',
  // チェックマークの位置を調整（枠の中央付近になるように）
  left: '5px',
  top: '1px',
  // チェックマークの形状とサイズ
  width: '5px',
  height: '10px',
  borderStyle: 'solid',
  borderColor: '#C9302C', // 画像に合わせた赤色（先のボタンの色を参考）
  borderWidth: '0 3px 3px 0', // 右と下のボーダーのみ表示
  transform: 'rotate(45deg)', // 45度回転させてチェックマークの形にする
})

// 実際のinput要素（非表示にする）
export const hiddenInput = style({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
})

// --- 状態に応じたスタイル ---
// :checked 疑似クラスは input 要素にしか適用できないため、
// 隣接セレクタ(+)や一般兄弟セレクタ(~)を使って、inputがチェックされたときに
// customCheckbox内のcheckmarkを表示させます。
// 想定HTML構造: <label><input class={hiddenInput} /><span class={customCheckbox}><span class={checkmark}></span></span>...</label>

globalStyle(`${hiddenInput}:checked + ${customCheckbox} > ${checkmark}`, {
  display: 'block', // チェックされたら表示
})

// キーボード操作時のフォーカススタイル（アクセシビリティ）
globalStyle(`${hiddenInput}:focus-visible + ${customCheckbox}`, {
  outline: '2px solid dodgerblue', // フォーカス時に青い枠線を表示（例）
  outlineOffset: '1px',
})

// ラベルテキストのスタイル (任意)
export const labelText = style({
  // 必要に応じてフォントサイズなどを指定
})
