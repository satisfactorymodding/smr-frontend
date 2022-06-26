<script lang="ts">
    import {GetTagsDocument} from "$lib/generated/graphql";
    import type {Tag} from "$lib/generated/graphql";
    import Chip, { Set, TrailingAction, Text } from '@smui/chips';
    import MenuSurface from '@smui/menu-surface';
    import {operationStore, query} from "@urql/svelte";
    import type {MenuSurfaceComponentDev} from "@smui/menu-surface/src/MenuSurface.types";
    import Textfield, {Input} from '@smui/textfield';
    import FloatingLabel from '@smui/floating-label';
    import LineRipple from '@smui/line-ripple';

    const getAllTags = operationStore(GetTagsDocument);

    export let tags : Tag[] = []
    export let editable = false

    let rootElem;

    let inputA;
    let floatingLabelA;
    let lineRippleA;
    let textfieldA;

    let shake = false

    let allTags : Tag[] = [];
    let filteredTagsMatched : Tag[] = []
    let filteredTagsUnmatched : Tag[] = []

    let newTagText : string

    let newTag : HTMLInputElement;
    let newTagContainer : HTMLElement = null;
    let surface: MenuSurfaceComponentDev;

    let focused = false;

    $: {
        if (inputA) newTag = inputA.getElement()
    }

    if (!tags) tags = [];

    if (editable) {
        query(getAllTags);
        getAllTags.subscribe((data) => {
            if (!getAllTags.fetching && !getAllTags.error) {
                allTags = getAllTags.data.getTags
                updateTags()
            }
        })
    }

    function setTagText(text : string) {
        newTagText = text
        newTag.value = newTagText
    }

    function filterAvailableTags(tagList : Tag[], currentTags : Tag[], filterText : string) : [Tag[], Tag[]] {
        if (!tagList || !currentTags) return [tagList, tagList]
        var unfiltered = tagList.filter(tag => !currentTags.find(t => t.id == tag.id))
        var filtered = unfiltered.filter(tag => {
            return !newTag || tag.name.startsWith(filterText)
        })
        unfiltered = unfiltered.filter(tag => filtered.findIndex(t => t.id === tag.id) === -1)
        return [filtered, unfiltered]
    }

    function updateTags() {
        tags = tags;
        [filteredTagsMatched, filteredTagsUnmatched] = filterAvailableTags(allTags, tags, newTagText)
    }

    export function setTextRange(el : HTMLInputElement, start : number, end : number) : void {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            /*const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            range.setStart(el.firstChild, start)
            range.setEnd(el.firstChild, end)
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);*/
            el.setSelectionRange(start, end)
        }
    }

    export function placeCaretAtEnd(el : HTMLInputElement) : void {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            /*const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);*/
            el.setSelectionRange(el.value.length, el.value.length);
        } /*else if (typeof (document.body as HTMLInputElement).createTextRange != "undefined") {
            const textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }*/
    }

    async function removeTag(tagId : string) {
        tags = tags.filter(tag => tag.id != tagId)
        tags = tags
    }

    function addTag(newTag : string|Tag) {
        if (!allTags) return false
        let tagToAdd = allTags.find(tag => {
            if (typeof newTag == "string") {
                return newTag == tag.name || newTag == tag.id
            } else {
                return newTag.id == tag.id
            }
        }) as Tag
        if (tagToAdd && !tags.find(tag => tag.id == tagToAdd.id)) {
            tags.push(tagToAdd)
            updateTags()
            return true
        }
        updateTags()
        return false
    }

    function newTagKeydown(e : KeyboardEvent) {
        if (e.code == "Backspace") {
            if (newTag.value == "") {
                setTagText(tags.pop().name)
                placeCaretAtEnd(newTag)
                tags = tags
                e.preventDefault()
                updateTags()
            }
        } else if (e.code == "Enter") {
            e.preventDefault()
            if (addTag(newTag.value)) {
                setTagText("")
                updateTags()
            } else {
                shake = true
                setTimeout(() => shake = false, 500)
            }
        } else {
            const newText = newTagText + e.key
            const [available] = filterAvailableTags(allTags, tags, newText)
            if (available && available.length > 0) {
                newTag.value = available[0].name
                setTextRange(newTag, newTagText.length + 1, newTag.value.length)
                e.preventDefault()
                newTagText = newText
                updateTags()
            }
        }
    }

    function getFocus() {
       /*if (newTag && !newTag.contains(document.activeElement)) {
            newTag.focus()
            placeCaretAtEnd(newTag)
        }*/
    }
</script>

<div class="tags" on:click={getFocus} bind:this={rootElem} on:focusin={() => focused = true} on:focusout={() => focused = false}>
{#if !editable}
    <Set class="tagList" chips={tags} let:chip key={tag => tag.name} nonInteractive>
        <Chip {chip} shouldRemoveOnTrailingIconClick={true} on:SMUIChip:removal={() => {updateTags(); setTimeout(() => getFocus(), 100)}}>
            <Text>{chip.name}</Text>
            {#if editable}
                <TrailingAction icon$class="material-icons">cancel</TrailingAction>
            {/if}
        </Chip>
    </Set>
{:else}
    <Textfield
            class="tags overflow-visible"
            bind:lineRipple={lineRippleA}
            bind:input={inputA}

            bind:this={textfieldA}

            on:click={getFocus}
    >
        <FloatingLabel
                class="pb-2"
                bind:this={floatingLabelA}
                for="input-manual-a"
                slot="label"
                floatAbove={(newTag && newTag.value.length > 0) || focused || tags.length > 0}
                float>Tags</FloatingLabel
        >
        <Set class="tagList" chips={tags} let:chip key={tag => tag.name} nonInteractive>
            <Chip {chip} shouldRemoveOnTrailingIconClick={true} on:SMUIChip:removal={() => {updateTags()}}>
                <Text>{chip.name}</Text>
                {#if editable}
                    <TrailingAction icon$class="material-icons" type="button">cancel</TrailingAction>
                {/if}
            </Chip>
        </Set>
        <div id="newTagContainer" bind:this={newTagContainer} on:focusin={() => surface.setOpen(true)} on:focusout={() => setTimeout(() => {if (newTagContainer && !newTagContainer.contains(document.activeElement)) surface.setOpen(false)}, 200)}>
            <MenuSurface bind:this={surface} managed={true} anchorCorner="BOTTOM_LEFT" anchorElement={newTag} style="z-index: 9999">
                <div style="margin: 1rem">
                    <h1>Available Tags</h1>
                    <div class="flex flex-wrap m-1">
                        <Set chips={filteredTagsMatched} let:chip key={tag => tag.name}>
                            <!--Wrapper-->
                                <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>
                                    <Text>{chip.name}</Text>
                                </Chip>
                                <!--Tooltip xPos="start">{chip.description}</Tooltip>
                            </Wrapper-->
                        </Set>
                    </div>
                    <div class="flex flex-wrap m-1">
                        <Set chips={filteredTagsUnmatched} let:chip key={tag => tag.name}>
                            <!--Wrapper-->
                                <Chip {chip} on:SMUIChip:interaction={() => addTag(chip.name)}>
                                    <Text>{chip.name}</Text>
                                </Chip>
                                <!--Tooltip xPos="start">{chip.description}</Tooltip>
                            </Wrapper-->
                        </Set>
                    </div>
                </div>
            </MenuSurface>
            <div id="newTagScroll">
                <!--span type="text" id="newTag" spellcheck="false" contenteditable="true"  role="textbox" class:shake bind:this={newTag} on:keydown={newTagKeydown} on:input={() => newTagText = newTag.textContent}></span-->
                <Input id="input-manual-a" spellcheck="false" autocomplete="off" class={shake ? "shake" : ""} bind:this={inputA} on:keydown={newTagKeydown} on:input={() => {newTagText = newTag.value; updateTags();}} />
            </div>
        </div>
        <LineRipple bind:this={lineRippleA} slot="ripple" />
    </Textfield>
{/if}
</div>

<style lang="scss">
    .tags {
        display: flex;
        flex-wrap: wrap;
    }

    .tagList {
        background-color: blue;
        flex: auto;
    }

    #newTagContainer {
        display: flex;
        flex: 1;
        max-width: 100%;
        width: 100%;
    }

    #newTagScroll {
        display: flex;
        min-width: 9rem;
        width: 100%;
    }

    #newTag {
        @apply p-3 mt-auto mb-auto;
        overflow: auto;
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
    }
</style>