<script lang="ts">
  import classnames from 'clsx';
</script>

<div>
  <div class={classnames('lg:px-0 mx-auto px-3 sm:px-4 md:px-0 container', $$props.class)}>
    <slot />
  </div>
</div>

<style>
  .container {
    max-width: 900px;
  }
</style>
