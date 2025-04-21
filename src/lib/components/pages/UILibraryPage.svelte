<script lang="ts">
  import Toggle from '../toggle/HeadlessUIToggle.svelte'
  import Dialog from '../dialog/HeadlessUIDialog.svelte'
  import { mainContainer, buttonField } from '../../styles/pages/LoginPage.css'
</script>

<main class={mainContainer}>
  <h1>HeadlessUI</h1>
  <h2>Toggle</h2>

  <div class={buttonField}>
    <Toggle />
  </div>

  <h2>Dialog</h2>

  <div class={buttonField}>
    <Dialog />
  </div>
</main>
