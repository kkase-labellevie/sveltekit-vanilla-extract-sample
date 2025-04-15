<script lang="ts">
  import { primaryButton } from '../../styles/button/button.css'

  export let label: string = ''
  export let buttonClass = primaryButton
  // デフォルトではprimaryButtonのクラスが適用される
</script>

<button class={buttonClass}> {label}</button>
