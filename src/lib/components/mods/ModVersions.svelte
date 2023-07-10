<script lang="ts">
  import { GetModVersionsDocument } from '$lib/generated';
  import { queryStore, getContextClient } from '@urql/svelte';
  import { API_REST } from '$lib/core';
  import { markdown } from '$lib/utils/markdown';
  import { base } from '$app/paths';
  import Card, { Content } from '@smui/card';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Menu from '@smui/menu';
  import List, { Item } from '@smui/list';
  import Button, { Group, GroupItem, Label, Icon } from '@smui/button';
  import { installMod } from '$lib/stores/launcher';
  import { prettyDate, prettyNumber, prettyBytes, prettyArch } from '$lib/utils/formatting';
  import { getTranslate } from "@tolgee/svelte";

  export let modId!: string;

  export const { t } = getTranslate();

  const client = getContextClient();

  let expandedVersions = new Set<string>();
  const menus = [];

  // TODO Pagination
  const versions = queryStore({
    query: GetModVersionsDocument,
    client,
    variables: {
      mod: modId,
      limit: 100,
      offset: 0
    }
  });

  const toggleRow = (versionId: string) => {
    if (expandedVersions.has(versionId)) {
      expandedVersions.delete(versionId);
    } else {
      expandedVersions.add(versionId);
    }
    expandedVersions = expandedVersions;
  };
</script>

<Card class="h-fit">
  {#if $versions.fetching}
    <Content>{ $t('loading') }...</Content>
  {:else if $versions.error}
    <Content>{ $t('error.oh-no') } {$versions.error.message}</Content>
  {:else}
    <DataTable class="max-w-full" container$class="!overflow-visible" table$class="!overflow-visible">
      <Head>
        <Row>
          <Cell>{ $t('version') }</Cell>
          <Cell>{ $t('stability') }</Cell>
          <Cell>SML { $t('version') }</Cell>
          <Cell>{ $t('downloads') }</Cell>
          <Cell>{ $t('upload-date') }</Cell>
          <Cell><!-- Buttons --></Cell>
        </Row>
      </Head>
      <Body>
        {#each $versions.data.getMod.versions as version, i}
          <Row on:click={() => toggleRow(version.id)}>
            <Cell>{version.version}</Cell>
            <Cell>{version.stability}</Cell>
            <Cell>{version.sml_version}</Cell>
            <Cell>{prettyNumber(version.downloads)}</Cell>
            <Cell>{prettyDate(version.created_at)}</Cell>
            <Cell class="!overflow-visible">
              <div
                class="grid grid-flow-col gap-4"
                on:click|stopPropagation={() => {
                  /*block table row expansion*/
                }}>
                <Button variant="outlined" href={base + '/mod/' + modId + '/version/' + version.id}>{ $t('view') }</Button>
                {#if version.arch.length != 0}
                  <Group variant="outlined">
                    <Button
                      variant="outlined"
                      href={API_REST + '/mod/' + modId + '/versions/' + version.id + '/download'}
                      class="flex-grow">
                      <Label>{ $t('download') }</Label>
                    </Button>
                    <div use:GroupItem>
                      <Button
                        on:click={() => menus[i].setOpen(true)}
                        variant="outlined"
                        style="padding: 0; min-width: 36px;">
                        <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
                      </Button>
                      <Menu bind:this={menus[i]} anchorCorner="TOP_LEFT">
                        <List>
                          {#each version.arch as arch, _}
                            <Item>
                              <Button
                                class="w-full"
                                variant="outlined"
                                href={API_REST +
                                  '/mod/' +
                                  modId +
                                  '/versions/' +
                                  version.id +
                                  '/' +
                                  arch.platform +
                                  '/download'}>{ $t('download') } {prettyArch(arch.platform)}</Button>
                            </Item>
                          {/each}
                        </List>
                      </Menu>
                    </div>
                  </Group>
                {:else}
                  <Button variant="outlined" href={API_REST + '/mod/' + modId + '/versions/' + version.id + '/download'}
                    >{ $t('download') }</Button>
                {/if}

                <Button variant="outlined" on:click={() => installMod($versions.data.getMod.mod_reference)}>
                  <Label>{ $t('install') }</Label>
                  <Icon class="material-icons">download</Icon>
                </Button>
              </div>
            </Cell>
          </Row>

          {#if expandedVersions.has(version.id)}
            <Row>
              <Cell colspan={6}>
                <div class="col-span-3 p-2">{ $t('size') }: {prettyBytes(version.size)}</div>
                <div class="col-span-3 p-2">{ $t('hash') }: {version.hash}</div>

                <div class="col-span-6 p-2 markdown-content">
                  {#await markdown(version.changelog) then changelogRendered}
                    {@html changelogRendered}
                  {/await}
                </div>
              </Cell>
            </Row>
          {/if}
        {/each}
      </Body>
    </DataTable>
  {/if}
</Card>
