<script lang="ts">
  import {page} from '$app/stores';
  import {loginDialogOpen} from "$lib/stores/global";
  import {user} from "$lib/stores/user";
  import {base} from "$app/paths";

  $: currentPath = $page.path;

  const activeLink = (path: string): string => {
    return currentPath.startsWith(path) ? ' active' : '';
  }

  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;
</script>

<div class="menu flex justify-between bg-black items-center">
  <a class="py-2.5 px-4 hoverable" href="{base}">SMR</a>
  <div class="grid grid-flow-col items-center h-full text-gray-400">
    <a class="hoverable h-full grid content-center{activeLink('/mods')}" href="{base}/mods">
      <div class="border-r-2 border-white px-4">Browse All Mods</div>
    </a>
    <a class="hoverable h-full grid content-center" target="_blank" href="https://docs.ficsit.app">
      <div class="border-r-2 border-white px-4">Modding Docs</div>
    </a>
    <a class="font-bold hoverable h-full grid content-center" target="_blank" href="https://smm.ficsit.app">
      <div class="border-r-2 border-white px-4 text-white">Download the Mod Manager</div>
    </a>
    <a class="hoverable h-full grid content-center{activeLink('/guides')}" href="{base}/guides">
      <div class="border-r-2 border-white px-4">Guides</div>
    </a>
    <a class="hoverable h-full grid content-center{activeLink('/tools')}" href="{base}/tools">
      <div class="border-r-2 border-white px-4">Tools</div>
    </a>
    <a class="hoverable h-full grid content-center{activeLink('/about')}" href="{base}/about">
      <div class="px-4">About</div>
    </a>
  </div>
  {#if $user === null}
    <button class="py-2.5 px-4 hoverable cursor-pointer" on:click={() => loginDialogOpen.set(true)}>Log in / Sign Up
    </button>
  {:else}
    <div class="h-full grid grid-flow-col gap-4">
      {#if isAdmin}
        <a href="{base}/admin" class="grid grid-flow-col hoverable px-4 content-center h-full cursor-pointer">
          <div>Admin</div>
        </a>
      {/if}
      <a href={'/user/' + $user.id} class="grid grid-flow-col hoverable px-4 content-center h-full cursor-pointer">
        <div class="mr-3">{$user.username}</div>
        <div class="rounded-full bg-cover w-7 h-7" style={`background-image: url("${$user.avatar}")`}></div>
      </a>
    </div>
  {/if}
</div>

<style lang="postcss">
  .hoverable {
    @apply hover:bg-white hover:bg-opacity-10;
  }

  .active {
    @apply bg-white bg-opacity-10 underline;
    text-underline-offset: 3px;
  }
</style>
