<script lang="ts">
  export let modLogo!: string;
  export let modName!: string;

  // TODO Outdated Flag
</script>

<div>
  <!-- TODO Fallback to default Logo -->
  <img class="rounded-lg max-w-lg" src={modLogo} alt="Logo for {modName}"/>
</div>
