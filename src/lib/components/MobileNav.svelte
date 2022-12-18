<script lang="ts">
  import NavLink from './NavLink.svelte';
  import Container from './Container.svelte';
  import classnames from 'clsx';

  export let visible = false;
</script>

<Container class={visible ? 'visible' : 'hidden'}>
  <div class={classnames('py-2 flex flex-col space-y-2', visible ? 'visible' : 'hidden')}>
    <NavLink href="/" mobile onClick={() => (visible = false)}>Home</NavLink>
    <NavLink href="/blog" mobile onClick={() => (visible = false)}>Blog</NavLink>
    <NavLink href="/resume" mobile onClick={() => (visible = false)}>Experience</NavLink>
    <NavLink href="/projects" mobile onClick={() => (visible = false)}>Projects</NavLink>
    <NavLink href="/contact" mobile onClick={() => (visible = false)}>Contact</NavLink>
  </div>
</Container>
