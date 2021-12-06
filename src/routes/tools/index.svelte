<script lang="ts">
  import type { Tool } from '$lib/models/tools';
  import ToolCard from '$lib/components/tools/ToolCard.svelte';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';

  const tools: Tool[] = [
    {
      name: 'Save Editor',
      author: 'Goz3rr',
      logo: 'https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png',
      description:
        'A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.',
      link: 'https://github.com/Goz3rr/SatisfactorySaveEditor'
    },
    {
      name: 'Satisfactory Tools',
      author: 'greeny',
      logo: 'https://www.satisfactorytools.com/assets/images/icons/android-chrome-512x512.png',
      description:
        'A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!',
      link: 'https://www.satisfactorytools.com/'
    },
    {
      name: 'Recipe Calculator',
      author: 'KirkMcDonald',
      logo: '',
      description: 'Recipe calculator using sankey diagrams.',
      link: 'https://kirkmcdonald.github.io/satisfactory-calculator/calc.html'
    },
    {
      name: 'Map',
      author: 'Cornik and S4XXX',
      logo: '',
      description: 'Satisfactory map based on in-game coordinates.',
      link: 'https://www.satisfactorymap.com/'
    },
    {
      name: 'SatisGraphtory',
      author: 'tehalexf and thinkaliker',
      logo: 'https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png',
      description:
        'This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!',
      link: 'https://satisgraphtory.com/'
    },
    {
      name: 'Satisfactory Calculator',
      author: 'Anthor',
      logo: '',
      description: 'Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)',
      link: 'https://satisfactory-calculator.com/'
    },
    {
      name: 'Savegame Tool',
      author: 'SillyBits',
      logo: '',
      description:
        'Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities',
      link: 'https://github.com/SillyBits/satisfactory-savegame-tool-ng'
    },
    {
      name: 'Satisfactory UI Kit',
      author: 'Deantendo',
      logo: '',
      description: 'A UI kit for Satisfactory mods',
      link: 'https://github.com/deantendo/sfuikit'
    },
    {
      name: 'Ficsit.info',
      author: 'Nevir',
      logo: 'https://github.com/ficsit/ficsit.info/blob/master/web/assets/site-icons/maskable-512.png?raw=true',
      description: 'Production line optimization tool, and game info database',
      link: 'https://ficsit.info/'
    },
    {
      name: "Daniel's Satisfactory Tools",
      author: 'DanielTheProgrammer',
      logo: 'https://i.imgur.com/Ogt0r9k.png',
      description: 'Visualize production chains, and browse items and recipes!',
      link: 'https://daniel2013.github.io/satisfactory/'
    },
    {
      name: 'Satisfactory Toolbox',
      author: 'Lucek',
      logo: '',
      description:
        'Factory tool collection, with main tool called "factory planner" with detailed, realtime stats for production and consumption, overclocking and much more.',
      link: 'https://toolbox.satisfactory.lucek.io/'
    }
  ];
</script>

<svelte:head>
  <title>Tools - SMR</title>
  <MetaDescriptors
    description="A collection of useful tools for Satisfactory, such as recipe calculators and save editors"
    title="Tools"
  />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">Tools</h1>
<div class="grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4">
  {#each tools as tool}
    <ToolCard {tool} />
  {/each}
</div>
