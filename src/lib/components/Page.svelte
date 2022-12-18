<script lang="ts">
  import Container from './Container.svelte';

  export let noContainer = false;
</script>

<slot name="header" />

{#if noContainer}
  <slot />
{:else}
  <div class="pb-3">
    <Container>
      <slot />
    </Container>
  </div>
{/if}
