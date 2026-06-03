<script lang="ts">
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
</script>

<svelte:head>
  <MetaDescriptors description="Mod content policy for the Satisfactory Mod Repository" title="Content Policy" />
</svelte:head>

<div class="card p-4">
  <section class="p-4">
    <h1>Content Policy</h1>
    <h2 id="advertising">Advertising within Mods</h2>

    <p>Any kind of advertising should keep the user experience in mind.</p>

    <span>Examples of disallowed, intrusive advertising include:</span>
    <ul class="list-disc pl-5">
      <li>blocking/timed UI elements/popups</li>
      <li>embedded advertising platforms serving video or image ads</li>
    </ul>

    <p></p>

    <span>Examples of allowed advertising include:</span>
    <ul class="list-disc pl-5">
      <li>an unobtrusive link/button that the player must explicitly click in a part of the mod's interface</li>
      <li>an in-game chat message as a direct result of interacting with the mod some number of times</li>
    </ul>

    <p>
      In general, a player should not encounter a mod's advertising unless they are interacting with that mod, and
      recurring advertising should be preventable via a clearly visible mod configuration option.
    </p>

    <p>
      These lists of allowed/disallowed methods are not exhaustive, whether some specific advertising is allowed will be
      decided on a case-by-case basis.
    </p>

    <h2 id="disclosures">Content Disclosures</h2>

    <p>
      As a platform, we have a responsibility to ensure players can make informed decisions about the content with which
      they engage. To facilitate this, we require mod developers to provide some information about their mods' behaviors
      and creation. Mod developers are responsible for keeping their disclosures up to date as policies evolve.
    </p>

    <h3 id="network_activity_transparency">Network Activity Transparency</h3>

    <p>
      Mods are required to clearly and explicitly state, in the mod's "Network Activity Transparency" section on
      Ficsit.app, any external network connectivity that will occur when using the mod. Multiplayer interaction and
      game-to-game synchronization are the only exceptions.
    </p>

    <span>Examples include, but are not limited to:</span>
    <ul class="list-disc pl-5">
      <li>API integrations with 3rd party services such as Patreon</li>
      <li>Communications with remote servers for which the player did not expressly opt-in</li>
    </ul>

    <p>
      Links within the game to external sites or services should be explicitly marked as such, before the player follows
      them.
    </p>

    <h3 id="ai_transparency">Generative AI Transparency</h3>

    <p>
      Generative Artificial Intelligence (AI) is a rapidly changing, legally and morally murky technology with an
      unclear future. As a result, expect this section to be updated as technology and laws develop.
    </p>

    <p>
      In order to empower players to make their own informed decisions about the mods they play with, we require mod
      developers to be transparent about their usage of AI in the mod creation process.
    </p>

    <p>
      Mods are required to clearly and explicitly state, in the mod's "AI Usage Transparency" section on Ficsit.app, the
      purposes for which any AI tools have been used in the creation of the mod or its content. This includes both the
      mod's in-game content and the content displayed on Ficsit.app.
    </p>

    <span>Examples of AI usage information the mod creator must disclose include, but are not limited to:</span>
    <ul class="list-disc pl-5">
      <li>If mod art assets (textures, icons, models, sounds, etc.) were created with AI assistance</li>
      <li>If Ficsit.app modpage assets (logos, images, etc.) were created with AI assistance</li>
      <li>If text content of the Ficsit.app modpage and patch notes were created with AI assistance</li>
      <li>
        If the mod allows the player to access generative AI at runtime (It is up to the mod developer to implement
        guard rails that prevent players from creating or being exposed to content that violates any other Ficsit.app
        policies)
      </li>
      <li>If translations of the mod to other languages were created with AI assistance</li>
      <li>If portions of the mod's source code were directly created by generative AI models</li>
      <li>
        If any of the mod's dependencies use AI and are hidden from normal display, the depending mod should restate the
        disclosure information (That is, do not use the mod dependency system to try to cover up AI usage)
      </li>
    </ul>

    <br />

    <span>These specific use cases do NOT need to be mentioned in the disclosure:</span>
    <ul class="list-disc pl-5">
      <li>
        Creation of voice lines for the character <a class="text-underline" href="https://satisfactory.wiki.gg/wiki/ADA"
          >ADA<span class="material-icons text-sm">launch</span></a>
        via the approach covered in the
        <a
          class="text-underline"
          href="https://docs.ficsit.app/satisfactory-modding/latest/Development/Satisfactory/AdaMessages.html"
          >modding documentation</a
        >. (Because ADA's original voice lines are created using
        <a class="text-underline" href="https://deepmind.google/research/wavenet/"
          >WaveNet<span class="material-icons text-sm">launch</span></a
        >, a generative AI technology, the only way for mods to ensure consistency with the base game's ADA is to use
        the same systems.) Using a model other than WaveNet to create ADA audio must still be disclosed.
      </li>
      <li>
        Usage of AI by downstream dependencies of the mod, or its development tools, over which the mod developer has no
        reasonable level of control.
        <br />
        Example: core Unreal Engine libraries, IDE intellisense suggestion ranking, search engine results
      </li>
    </ul>

    <p>
      Due to the fast-changing nature of the field, we may work with developers to update disclosures for reasons not
      yet listed here.
    </p>

    <h2 id="paid_content">Paid Content</h2>

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
      ¹ We reserve the right to restrict the use of certain platforms or payment and donation methods. Players should
      still research a platform before using it and we hold no responsibility over actions taken outside of this
      website.
    </small>

    <h2 id="explicit_content">Violent, Harmful, and Explicit Content</h2>
    <p>
      Until the platform can responsibly hide content from minors using some form of age-gating, mods with violent,
      harmful, explicit, gory, or otherwise adult-only content are expressly forbidden.
    </p>
  </section>
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

  h3 {
    @apply my-4 text-2xl font-bold;
  }

  li {
    padding-top: 4px;
  }

  .text-underline {
    @apply underline;
  }
</style>
