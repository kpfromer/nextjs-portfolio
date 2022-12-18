<script lang="ts">
  import classnames from 'clsx';
  import info from '$lib/configs/info';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaStackOverflow from 'svelte-icons/fa/FaStackOverflow.svelte';

  export let spacing = 'flex space-x-4';
  export let color = 'text-gray-700 dark:text-white transition-colors duration-500';
</script>

<!-- {...props} -->
<div class={classnames(spacing, color)}>
  <a target="_blank" rel="noopener noreferrer" href={info.github} aria-label="Github">
    <div class="icon" aria-hidden>
      <FaGithub />
    </div>
  </a>

  <a target="_blank" rel="noopener noreferrer" href={info.linkedin} aria-label="LinkedIn">
    <div class="icon" aria-hidden>
      <FaLinkedin />
    </div>
  </a>

  <a rel="noopener noreferrer" href={info.stackoverflow} aria-label="Stack Overflow">
    <div class="icon" aria-hidden>
      <FaStackOverflow />
    </div>
  </a>
</div>

<style>
  .icon {
    @apply w-10 h-10;
  }
</style>
