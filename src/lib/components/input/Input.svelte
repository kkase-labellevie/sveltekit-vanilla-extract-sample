<script lang="ts">
  import { input } from '../../styles/input/input.css'
  export let type: string = 'text'
  export let placeholder: string = ''
  export let bindValue: string = ''
</script>

<input {type} {placeholder} bind:value={bindValue} class={input} />
