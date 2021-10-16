<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  let search = $page.query.get('q');

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goto(base + '/mods?q=' + search);
    }
  };
</script>

<div class="bg-black bg-opacity-70 p-4 grid search-container">
  <!--  <input-->
  <!--    class="bg-transparent w-full focus:outline-none text-gray-300"-->
  <!--    placeholder="Type here to search, you can use #tags or !awards" />-->
  <input
    class="bg-transparent w-full focus:outline-none text-gray-300"
    placeholder="An awesome mod..."
    on:keypress={onKeyPress}
    bind:value={search} />
  <!-- TODO Tags/Rewards -->
  <!--  <a class="text-gray-400 cursor-pointer" href={base}>See all tags / See all rewards</a>-->
</div>

<style lang="postcss">
  .search-container {
    grid-template-columns: auto max-content;
  }
</style>
