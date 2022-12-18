<script lang="ts">
  import classnames from 'clsx';

  export let overrideClassName = false;
</script>

<button
  {...$$props}
  class={overrideClassName
    ? $$props.class
    : classnames(
        'rounded-lg inline-block p-3 bg-gray-200 text-black hover:bg-gray-300 dark:text-white dark:bg-naturalGray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-colors ease-in-out',
        $$props.class,
      )}
  on:click
>
  <slot />
</button>

<style>
  button {
    @apply w-10 h-10 inline-flex appearance-none items-center justify-center transition-all select-none relative whitespace-nowrap align-middle outline-none;
  }
</style>
