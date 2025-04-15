<script lang="ts">
  import Button from '../button/Button.svelte'
  import RecipeVerButton from '../button/RecipeVerButton.svelte'

  import {
    mainContainer,
    formStyle,
    buttonField,
    hrLine,
  } from '../../styles/pages/LoginPage.css'

  import {
    primaryButton,
    secondaryButton,
    superPrimaryButton,
  } from '../../styles/button/button.css'

  let email = ''
  let password = ''
  let autoLogin = false

  function handleLogin() {
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Auto-login:', autoLogin)
  }
</script>

<main class={mainContainer}>
  <form on:submit|preventDefault={handleLogin} class={formStyle}>
    <div class={buttonField}>
      <Button label="プライマリーボタン" buttonClass={primaryButton} />
    </div>
    <div class={buttonField}>
      <Button label="セカンダリーボタン" buttonClass={secondaryButton} />
    </div>
    <div class={buttonField}>
      <Button label="プライマリーボタン" buttonClass={superPrimaryButton} />
    </div>
    <div class={buttonField}>
      <Button label="プライマリーボタン(デフォルト)" />
    </div>

    <div class={hrLine}></div>

    <h1>レシピver</h1>
    <div class={buttonField}>
      <RecipeVerButton label="プライマリーボタン" variant={'primary'} />
    </div>
    <div class={buttonField}>
      <RecipeVerButton label="セカンダリーボタン" variant={'secondary'} />
    </div>
    <div class={buttonField}>
      <RecipeVerButton label="プライマリーボタン(デフォルト)" />
    </div>
  </form>
</main>
