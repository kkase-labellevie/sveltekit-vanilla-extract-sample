<script lang="ts">
  export let type: string = 'text';
  export let placeholder: string = '';
  export let bindValue: string = '';
</script>

<input {type} {placeholder} bind:value={bindValue} class="input" />
