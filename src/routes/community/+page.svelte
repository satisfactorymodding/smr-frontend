<script lang="ts">
  import { goto } from '$app/navigation';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <title>Community - SMR</title>
  <MetaDescriptors
    description="Information and links to get connected with the Satisfactory Mod Repository community"
    title="Community" />
</svelte:head>

<div>
  <div class="grid grid-flow-col grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
    <div class="card p-4">
      <div class="grid grid-flow-col grid-cols-1 grid-rows-2 gap-4 2xl:grid-cols-2 2xl:grid-rows-1">
        <div>
          <h2>Discord</h2>
          <p>
            The Satisfactory Modding Discord server is the primary place for modding discussion and support. Click the
            button below to join the server.
          </p>
          <button class="variant-ghost-primary btn btn-sm" on:click={() => goto('https://discord.ficsit.app/')}>
            <span>Join the Discord</span>
            <span class="material-icons">people</span>
          </button>
          <h2>Ban Appeals</h2>
          <p>
            If you have been banned from the Discord server and would like to appeal your ban, you can do so using the
            form linked below.
          </p>
          <!-- TODO actual unban forum -->
          <button class="variant-ghost-primary btn btn-sm" on:click={() => goto('https://discord.ficsit.app/')}>
            <span>Submit an Appeal</span>
            <span class="material-icons">how_to_vote</span>
          </button>
        </div>
        <iframe
          src="https://discord.com/widget?id=555424930502541343&theme=dark"
          width="350"
          height="500"
          allowtransparency={true}
          frameborder="0"
          title="Discord Widget"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </div>

    <div class="card p-4">
      <section class="p-4">
        <h1>Community</h1>
        <p>
          Welcome to the Satisfactory Modding comunity! Click here for a guide to help you get started playing with
          mods.
        </p>
        <button
          class="variant-ghost-primary btn btn-sm text-2xl"
          on:click={() => goto('https://docs.ficsit.app/satisfactory-modding/latest/ForUsers/Welcome.html')}>
          <span>Visit the Welcome Guide</span>
          <span class="material-icons">waving_hand</span>
        </button>
        <h2>Archived Forums</h2>
        <p>
          The community used to have a Discourse-powered forums website for modding discussion, but it has since been
          archived due to low usage. You can find the archives here.
        </p>
        <button class="variant-ghost-primary btn btn-sm" on:click={() => goto('https://forums.ficsit.app/')}>
          <span>Open Archived Forums</span>
          <span class="material-icons">forum</span>
        </button>
      </section>
    </div>
  </div>
</div>

<style lang="postcss">
  p {
    @apply my-5 text-base;
  }

  h1 {
    @apply my-4 text-4xl font-bold;
  }

  h2 {
    @apply my-4 text-3xl font-bold;
  }
</style>
