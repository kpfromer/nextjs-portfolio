<script lang="ts">
  import classnames from 'clsx';

  export let href: string;
  export let mobile = false;
</script>

<a {...$$props} {href} class={classnames('font-bold', mobile ? 'text-2xl py-2' : 'text-xl')}>
  <slot />
</a>
