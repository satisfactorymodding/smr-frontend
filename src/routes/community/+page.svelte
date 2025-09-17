<script lang="ts">
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
              defaultValue="If you have been banned from the modding Discord server and would like to appeal, use the
            form linked below. Note that our bans are separate from the official Satisfactory Discord - we can't assist you with bans there." />
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
        <h1><T keyName="community.welcome.header" defaultValue="Welcome" /></h1>
        <p>
          <T
            keyName="community.welcome.description"
            defaultValue="Welcome to the Satisfactory Modding community! Click here for a guide to help you get started playing with
          mods. Currently only available in English." />
        </p>
        <LinkButton
          url="https://docs.ficsit.app/satisfactory-modding/latest/ForUsers/Welcome.html"
          icon="waving_hand"
          extraCss="text-2xl">
          <T keyName="community.welcome.guide-button" defaultValue="Visit the Welcome Guide" />
        </LinkButton>
        <h2><T keyName="community.answer-overflow.header" defaultValue="Answer Overflow" /></h2>
        <p>
          <T
            keyName="community.answer-overflow.description"
            defaultValue="Certain channels in the Discord are indexed via Answer Overflow. This means search engines like Google can search their posts and you can read them without being a Discord member. You can also directly view these posts from the Answer Overflow site." />
        </p>
        <LinkButton url="https://www.answeroverflow.com/c/555424930502541343/1243688087578738770" icon="search">
          <T keyName="community.answer-overflow.visit-button" defaultValue="Browse Answer Overflow" />
        </LinkButton>
        <h2><T keyName="community.forums.header" defaultValue="Archived Forums" /></h2>
        <p>
          <T
            keyName="community.forums.description"
            defaultValue="The community used to host a Discourse-powered forums website for modding discussion, but it has since been
          archived due to low usage. You can find the archives here." />
        </p>
        <LinkButton url="https://forums.ficsit.app/" icon="forum">
          <T keyName="community.forums.visit-button" defaultValue="View the Archived Forums" />
        </LinkButton>
      </section>
    </div>
  </div>
</div>

<style lang="postcss">
  @reference "../../app.pcss";

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
