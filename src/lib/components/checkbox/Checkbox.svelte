<script lang="ts">
  export let bindChecked: boolean = false;
</script>

<label>
  <input type="checkbox" bind:checked={bindChecked} />
  次回から自動でログインする
</label>
