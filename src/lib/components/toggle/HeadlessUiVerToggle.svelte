<script lang="ts">
  import { createSwitch } from 'svelte-headlessui'
  import * as styles from '../../styles/toggle/toggle.css'

  const sw = createSwitch({ checked: false })
</script>

<button use:sw.toggle class={$sw.checked ? styles.buttonOn : styles.buttonOff}>
  {$sw.checked ? 'ON' : 'OFF'}
</button>
