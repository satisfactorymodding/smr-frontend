<script lang="ts">
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <MetaDescriptors description="Mod content policy for the Satisfactory Mod Repository" title="Content Policy" />
</svelte:head>

<div class="card p-4">
  <section class="p-4">
    <h1>Content Policy</h1>
    <h2>Advertising within Mods</h2>

    <p>Any kind of advertising should keep the user experience in mind.</p>

    <p>
      Examples of disallowed, intrusive advertising include:<br />
      • blocking/timed UI elements/popups<br />
      • embedded advertising platforms serving video or image ads
    </p>

    <p>
      Examples of allowed advertising include:<br />
      • an unobtrusive link/button that the user must explicitly click in a part of the mod's interface<br />
      • an in-game chat message as a direct result of interacting with the mod some number of times
    </p>

    <p>
      In general, a user should not encounter a mod's advertising unless they are interacting with that mod, and
      recurring advertising should be preventable via a clearly visible mod configuration option.
    </p>

    <p>
      These lists of allowed/disallowed methods are not exhaustive, whether some specific advertising is allowed will be
      decided on a case-by-case basis.
    </p>

    <h2>Network Activity Transparency</h2>

    <p>
      Mods are required to clearly and explicitly state, in the mod’s description on Ficsit.app, any external network
      connectivity that will occur when using the mod. Multiplayer interaction and game-to-game synchronization are the
      only exceptions. Examples include, but are not limited to:<br />
      • API integrations with 3rd party services<br />
      • Links to external sites or services, which should explicitly be marked as such
    </p>

    <h2>Paid Content</h2>

    <p>
      Mods can advertise the payment or donation platform of their choice¹ as long as it does not create any intrusive
      advertisement experience for a player. If an API is used, it must be included in the description of the mod as
      part of the network activity transparency. If a link is displayed in game, the full url must be visible, (as this
      is for safety's sake, no url shorteners may be used).
    </p>

    <p>
      Mods cannot lock features behind any form of payment, donation, or subscription. Mods can have early access
      versions of itself behind payment, donation, or subscription as long as the intent is to release the early access
      version to the public within a reasonable timeframe.
    </p>

    <p>Mods cannot include a 'remove ads' payment, donation, or subscription feature.</p>

    <small>
      ¹ We reserve the right to restrict the use of certain platforms or payment and donation methods. Users should
      still research a platform before using it and we hold no responsibility over actions taken outside of this
      website.
    </small>

    <h2>Violent, Harmful, and Explicit Content</h2>
    <p>
      Until the platform can responsibly hide content from minors using some form of age-gating, mods with violent,
      harmful, explicit, gory, or otherwise adult-only content are expressly forbidden.
    </p>
  </section>
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
