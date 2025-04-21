<script lang="ts">
  import { onMount } from 'svelte'
  import { createDialog } from 'svelte-headlessui'
  import { overlay, modal, modalContent } from '../../styles/daialog/dialog.css'

  const dialog = createDialog({ label: 'Payment Success' })

  onMount(() => {
    dialog.open()
  })

  function handleOverlayKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
      dialog.close()
    }
  }
</script>

<button on:click={dialog.open}>Open Dialog</button>

{#if $dialog.expanded}
  <!-- アクセシブルなオーバーレイ -->
  <div
    class={overlay}
    role="button"
    tabindex="0"
    aria-label="Close dialog"
    on:click={dialog.close}
    on:keydown={handleOverlayKeydown}
  ></div>

  <div class={modal}>
    <div class={modalContent}>
      <h3>Payment Successful</h3>
      <p>Your payment has been successfully submitted.</p>
      <button on:click={dialog.close}>Close</button>
    </div>
  </div>
{/if}
