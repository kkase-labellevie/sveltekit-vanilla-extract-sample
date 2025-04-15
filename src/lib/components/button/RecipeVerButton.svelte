<script lang="ts">
  import { recipeVerButton } from '../../styles/button/recipeVerButton.css'

  export let label: string = 'ログイン'
  export let variant: 'primary' | 'secondary' = 'primary'
</script>

<!-- variant に応じてクラスを生成 -->
<button class={recipeVerButton({ variant })}>
  {label}
</button>
