<script lang="ts">
  import '../app.css';
  import { darkMode } from '$lib/darkmode';
  import { afterUpdate } from 'svelte';

  afterUpdate(() => {
    const root = window.document.querySelector('html');
    const isDark = $darkMode === 'dark';

    root!.classList.remove(isDark ? 'light' : 'dark');
    if (isDark) root!.classList.add('dark');

    localStorage.setItem(darkMode.key, isDark ? 'dark' : 'light');
  });
</script>

<slot />
