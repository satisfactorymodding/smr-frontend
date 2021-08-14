<script lang="ts">
  export let avatar!: string;
  export let username!: string;

  // TODO Outdated Flag
</script>

<div>
  <!-- TODO Fallback to default Logo -->
  <img class="rounded-lg max-w-lg" src={avatar} alt="Avatar for {username}"/>
</div>
