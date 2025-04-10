<script lang="ts">
  // Props名は 'checked' にするのが一般的です
  export let checked: boolean = false

  // checkbox.css.ts から必要なスタイル名をすべてインポートします
  import {
    checkboxContainer, // ラベル全体を囲むスタイル
    hiddenInput, // 非表示にする実際のinput要素のスタイル
    customCheckbox, // 見た目上のチェックボックス（枠）のスタイル
    checkmark, // チェックマークのスタイル
    labelText, // ラベルテキストのスタイル（任意）
  } from '../../styles/checkbox/checkbox.css' // インポートパスを確認してください

  // labelとinputを関連付けるためのユニークID (アクセシビリティ向上のため推奨)
  const id = `checkbox-${Math.random().toString(36).substring(2, 9)}`
</script>

<label class={checkboxContainer} for={id}>
  <input type="checkbox" bind:checked class={hiddenInput} {id} />

  <span class={customCheckbox}>
    <span class={checkmark}></span>
  </span>

  <span class={labelText}> 次回から自動でログインする </span>
</label>

<style>
  /* このコンポーネント固有のスタイルがあればここに追加 */
</style>
