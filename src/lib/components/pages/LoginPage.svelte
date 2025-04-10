<script lang="ts">
  import Input from '../input/Input.svelte';
  import Checkbox from '../checkbox/Checkbox.svelte';
  import Button from '../button/Button.svelte';

  let email = '';
  let password = '';
  let autoLogin = false;

  function handleLogin() {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Auto-login:', autoLogin);
  }
</script>

<main>
  <h1>ログイン</h1>

  <form on:submit|preventDefault={handleLogin}>
    <div>
      <Input type="email" placeholder="メールアドレス" bindValue={email} />
    </div>
    <div>
      <Input type="password" placeholder="パスワード" bindValue={password} />
    </div>
    <div>
      <Checkbox bindChecked={autoLogin} />
    </div>
    <div>
      <Button label="ログイン" />
    </div>
  </form>

  <div>
    <a href="/">パスワードをお忘れですか？</a>
  </div>
</main>
