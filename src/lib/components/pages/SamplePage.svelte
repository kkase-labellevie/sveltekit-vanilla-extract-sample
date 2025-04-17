<script lang="ts">
  import Button from '../button/Button.svelte'
  import RecipeVerButton from '../button/RecipeVerButton.svelte'
  import SprinklesVerButton from '../button/SprinklesVerButton.svelte'
  import sumiButton from '@smui/button'

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
    darkThemeButton,
  } from '../../styles/button/button.css'

  import { darkTheme } from '../../styles/theme.css'

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

    <div class="light">
      <div class={buttonField}>
        <Button
          label="ライトテーマボタン(selectors)"
          buttonClass={primaryButton}
        />
      </div>
    </div>

    <div class={darkTheme}>
      <div class={buttonField}>
        <Button label="ダークテーマボタン" buttonClass={darkThemeButton} />
      </div>
    </div>

    <!-- クラスが適用されていない -->
    <div class={buttonField}>
      <Button
        label="ダークテーマボタン(クラスが適用されていない)"
        buttonClass={darkThemeButton}
      />
    </div>

    <div class={buttonField}>
      <Button label="プライマリーボタン(デフォルト)" />
    </div>

    <div class={hrLine}></div>

    <h1>レシピ ver</h1>
    <div class={buttonField}>
      <RecipeVerButton label="プライマリーボタン" variant={'primary'} />
    </div>
    <div class={buttonField}>
      <RecipeVerButton label="セカンダリーボタン" variant={'secondary'} />
    </div>
    <div class={buttonField}>
      <RecipeVerButton label="プライマリーボタン(デフォルト)" />
    </div>

    <div class={hrLine}></div>

    <h1>Sprinkles ver</h1>
    <div class={buttonField}>
      <SprinklesVerButton label="プライマリーボタン(デフォルト)" />
    </div>

    <h1>SMUI ver</h1>
    <div class={buttonField}>
      <sumiButton />
    </div>
  </form>
</main>
