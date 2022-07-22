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
    [AnnouncementImportance.Fix]: 'bg-orange-600'
  };

  export let message: string;
  export let importance: AnnouncementImportance;
</script>

<div class="p-1 {backgroundColors[importance]}">
  <Icon class="material-icons text-2xl align-middle">{iconNames[importance]}</Icon>
  <span class="align-middle text-l"><b>{importance}:</b> {message}</span>
</div>
