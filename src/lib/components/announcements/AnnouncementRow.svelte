<script lang="ts">
  import { AnnouncementImportance } from '$lib/generated';
  import { markdown } from '$lib/utils/markdown';

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

  interface Props {
    message: string;
    importance: AnnouncementImportance;
  }

  let { message, importance }: Props = $props();

  // Enables making monospace announcements
  let isMonospace = $derived(message.startsWith(monospacePrefix));
  let finalMessage = $derived(isMonospace ? message.replaceAll(monospacePrefix, '') : message);
</script>

<div class="{backgroundColors[importance]} max-h-64 overflow-hidden rounded-sm">
  <div class="striped p-1 text-black">
    <span class="material-icons align-middle text-2xl">{iconNames[importance]}</span>
    <div
      class="text-l announcement-markdown inline-block max-w-full break-words align-middle"
      class:font-mono={isMonospace}
      class:whitespace-pre={isMonospace}>
      <b>{importance}: </b>
      {#await markdown(finalMessage, true) then previewRendered}
        <!-- eslint-disable-next-line -->
        {@html previewRendered}
      {/await}
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
