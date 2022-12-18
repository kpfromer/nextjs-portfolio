<script lang="ts">
  import Container from './Container.svelte';
  import IconButton from './IconButton.svelte';
  import NavLink from './NavLink.svelte';
  import FaBars from 'svelte-icons/fa/FaBars.svelte';
  import FaSun from 'svelte-icons/fa/FaSun.svelte';
  import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
  import MobileNav from './MobileNav.svelte';
  import { darkMode } from '$lib/darkmode';

  export let bottomNav = false;

  let mobileNav = false;
</script>

<div
  class="py-4 sticky top-0 left-0 right-0 z-10 bg-gray-50 dark:bg-naturalGray-400 transition-colors duration-500"
>
  {#if bottomNav}
    <MobileNav visible={mobileNav} />
  {/if}

  <Container class="flex justify-center items-center">
    <IconButton
      class="sm:!hidden"
      aria-label="Toggle Menu"
      on:click={() => (mobileNav = !mobileNav)}
    >
      <FaBars />
    </IconButton>

    <div class="hidden sm:flex sm:flex-row sm:space-x-3">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/resume">Resume</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </div>

    <div class="flex-grow" />

    <IconButton class="sm:hidden" aria-label="Toggle dark mode." on:click={() => darkMode.toggle()}>
      {#if !$darkMode}
        <FaSun />
      {:else}
        <FaMoon />
      {/if}
    </IconButton>
  </Container>

  {#if !bottomNav}
    <MobileNav visible={mobileNav} />
  {/if}
</div>
