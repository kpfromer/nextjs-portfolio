<script>
  import SvelteSeo from 'svelte-seo';
  import backgroundImage from '$lib/assets/crested-butte-2016-07-14.jpg';
  import meImage from '$lib/assets/kyle-pfromer.jpg';
  import Page from '$lib/components/Page.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import Header from '$lib/components/Header.svelte';

  export const prerender = true;
</script>

<SvelteSeo title="Home" description="Learn more about me." />

<Page noContainer>
  <div class="relative flex h-screen page-container">
    <div class="absolute top-0 left-0 right-0 bottom-0 back" id="top">
      <img
        src={backgroundImage}
        placeholder="blur"
        alt="Crested Butte Mountains"
        class="w-full h-full backgroundImage"
      />
    </div>
    <div class="absolute top-0 left-0 right-0 bottom-0 background" />
    <div class="m-auto z-10">
      <div class="space-y-4 text-center flex flex-col justify-center items-center">
        <div class="overflow-hidden rounded-full meImage">
          <img src={meImage} alt="Kyle Pfromer" class="meImage" />
        </div>

        <h1 class="text-6xl text-primary-500 font-bold">Hi!</h1>

        <h2 class="text-5xl text-white font-bold">I'm Kyle Pfromer</h2>

        <h3 class="text-2xl text-white">
          and I'm a <span class="font-bold text-2xl">Software Engineer</span>
        </h3>

        <SocialLinks color="text-white" />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0">
      <Header bottomNav />
      <!-- <SvgWave />
		<Header bottomNav /> -->
    </div>
  </div>
</Page>

<style>
  .page-container {
    z-index: 1;
  }
  #top {
    z-index: -1;
  }
  .background {
    z-index: -1;
    background-color: #000000aa;
  }
  .backgroundImage {
    object-position: 50% 50%;
    object-fit: cover;
  }
  .meImage {
    width: 200px;
    height: 200px;
  }
</style>
