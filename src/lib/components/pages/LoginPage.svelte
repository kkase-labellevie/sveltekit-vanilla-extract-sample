<script lang="ts">
  import Input from '../input/Input.svelte'
  import Checkbox from '../checkbox/Checkbox.svelte'
  import Button from '../button/Button.svelte'
  // 作成したスタイルファイルをインポート
  import {
    mainContainer,
    title,
    formStyle,
    formField, // gapを使う場合は不要かもしれないが念のため
    checkboxField,
    buttonField,
    fullWidthButton, // Buttonに適用するクラス
    forgotPasswordContainer,
    forgotPasswordLink,
  } from '../../styles/pages/LoginPage.css' // スタイルファイルのパスを確認

  let email = ''
  let password = ''
  let autoLogin = false

  function handleLogin() {
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Auto-login:', autoLogin)
    // ここで実際のログイン処理を呼び出す
  }
</script>

<main class={mainContainer}>
  <h1 class={title}>ログイン</h1>

  <form on:submit|preventDefault={handleLogin} class={formStyle}>
    <div class={formField}>
      <Input type="email" placeholder="メールアドレス" bindValue={email} />
    </div>
    <div class={formField}>
      <Input type="password" placeholder="パスワード" bindValue={password} />
    </div>
    <div class={checkboxField}>
      <Checkbox bind:checked={autoLogin} />
    </div>
    <div class={buttonField}>
      <Button label="ログイン" />
    </div>
  </form>

  <div class={forgotPasswordContainer}>
    <a href="/" class={forgotPasswordLink}>パスワードをお忘れですか？</a>
  </div>
</main>
