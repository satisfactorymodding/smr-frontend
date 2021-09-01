<div class="relative text-gray-500">
  <div class="shadowed grid grid-flow-row p-3 bg-gray-700 gap-3 relative min-h-full">
    <div class="top grid grid-flow-col gap-4">
      <div class="shadowed relative padded">
        <div class="bg-gray-500 w-full h-full absolute left-0 top-0" />
      </div>
      <div>
        <div><span class="text-xl font-flow">Fake Card Name</span></div>
        <div class="text-sm">
          <span class="font-flow">Views / Downloads</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .shadowed {
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  }

  .top {
    grid-template-columns: 30% auto;
  }

  .padded {
    width: 100%;
    padding: 50%;
    box-sizing: border-box;
  }
</style>
