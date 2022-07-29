<script lang="ts">
  import { AnnouncementImportance } from '$lib/generated';
  import { Icon } from '@smui/icon-button';

  const iconNames: { [key in AnnouncementImportance]: string } = {
    [AnnouncementImportance.Info]: 'info',
    [AnnouncementImportance.Alert]: 'error',
    [AnnouncementImportance.Warning]: 'warning',
    [AnnouncementImportance.Fix]: 'build_circle'
  };
  const backgroundColors: { [key in AnnouncementImportance]: string } = {
    [AnnouncementImportance.Info]: 'bg-sky-500',
    [AnnouncementImportance.Alert]: 'bg-red-600',
    [AnnouncementImportance.Warning]: 'bg-yellow-400',
    [AnnouncementImportance.Fix]: 'bg-green-600'
  };
  const monospacePrefix = 'monotext:';

  export let message: string;
  export let importance: AnnouncementImportance;

  // Enables making monospace announcements
  $: isMonospace = message.startsWith(monospacePrefix);
  $: finalMessage = isMonospace ? message.replaceAll(monospacePrefix, '') : message;
</script>

<div class="{backgroundColors[importance]} max-h-64 overflow-hidden">
  <div class="p-1 striped text-black">
    <Icon class="material-icons text-2xl align-middle">{iconNames[importance]}</Icon>
    <div
      class="align-middle text-l inline-block break-words max-w-full"
      class:font-mono={isMonospace}
      class:whitespace-pre={isMonospace}>
      <b>{importance}: </b>{finalMessage}
    </div>
  </div>
</div>

<style>
  .striped {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 14px,
      rgba(60, 60, 60, 0.1) 14px,
      rgba(60, 60, 60, 0.1) 28px
    );
  }
</style>
