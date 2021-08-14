<script lang="ts">
  export let title: string;
</script>

<div class="flex flex-col max-w-none bg-gray-800 rounded-lg base">
  <div class="sample rounded-t-xl h-5/6"></div>
  <div class="p-3">
    <span class="text-xl">{ title }</span>
  </div>
</div>

<style lang="postcss">
  .base {
    height: 250px;
  }

  .sample {
    background: url("https://cdn.discordapp.com/discovery-splashes/555424930502541343/986717b1ac257d1a0328e65bdf4481f2.jpg?size=4096") center;
    background-size: cover;
    box-shadow: inset 0 0 70px 20px rgb(0 0 0);
  }
</style>

