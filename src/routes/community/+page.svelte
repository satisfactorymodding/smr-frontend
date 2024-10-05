<script lang="ts">
  import { goto } from '$app/navigation';
  import LinkButton from '$lib/components/general/LinkButton.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import { T } from '@tolgee/svelte';
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
      <div
        class="grid grid-flow-col grid-cols-1 grid-rows-2 justify-items-center gap-4 2xl:grid-cols-2 2xl:grid-rows-1">
        <div>
          <h2><T keyName="community.discord.header" defaultValue="Modding Community Discord" /></h2>
          <p>
            <T
              keyName="community.discord.description"
              defaultValue="The Satisfactory Modding Discord server is the primary place for modding discussion and support. Click the
            button below to join the server." />
          </p>
          <LinkButton url="https://discord.ficsit.app/" icon="people">
            <T keyName="community.discord.join-button" defaultValue="Join the Discord" />
          </LinkButton>
          <h2><T keyName="community.discord-bans.header" defaultValue="Ban Appeals" /></h2>
          <p>
            <T
              keyName="community.discord-bans.description"
              defaultValue="If you have been banned from the Discord server and would like to appeal your ban, you can do so using the
            form linked below." />
          </p>
          <LinkButton url="https://dyno.gg/form/b3425ef2" icon="how_to_vote">
            <T keyName="community.discord-bans.appeal-button" defaultValue="Submit an Appeal" />
          </LinkButton>
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
        <LinkButton
          url="https://docs.ficsit.app/satisfactory-modding/latest/ForUsers/Welcome.html"
          icon="waving_hand"
          extraCss="text-2xl">
          <T keyName="community.welcome.guide-button" defaultValue="Visit the Welcome Guide" />
        </LinkButton>
        <h2>Archived Forums</h2>
        <p>
          The community used to have a Discourse-powered forums website for modding discussion, but it has since been
          archived due to low usage. You can find the archives here.
        </p>
        <button class="variant-ghost-primary btn btn-sm" on:click={() => goto('https://forums.ficsit.app/')}>
          <span>Open Archived Forums</span>
          <span class="material-icons">forum</span>
        </button>
        <LinkButton url="https://forums.ficsit.app/" icon="forum">
          <T keyName="community.forums.visit-button" defaultValue="View the Archived Forums" />
        </LinkButton>
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
