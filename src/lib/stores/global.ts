import { writable } from 'svelte/store';
import type { Client } from '@urql/svelte';
import { browser } from '$app/env';

export const loginDialogOpen = writable<boolean>(false);

export const gqlClient = writable<undefined | Client>(undefined);

let mobileQuery: MediaQueryList;
if (browser) {
  mobileQuery = window.matchMedia('(min-width: 1280px)');

  mobileQuery.addEventListener('change', (data) => {
    onMobile && onMobile.set(!data.matches);
  });
}

export const onMobile = writable<boolean>(mobileQuery && !mobileQuery.matches);
export const doggoNeedsPats = writable<boolean>(false);
export const easterEgg = writable<boolean>(false);

if (browser) {
  const easterCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA',
    'Space'
  ];

  const codeBuffer = [];

  window.onkeyup = (ev) => {
    codeBuffer.push(ev.code);
    if (codeBuffer.length > easterCode.length) {
      codeBuffer.shift();
    }

    if (codeBuffer.length == easterCode.length) {
      let valid = true;
      for (let i = 0; i < easterCode.length; i++) {
        if (easterCode[i] !== codeBuffer[i]) {
          valid = false;
          break;
        }
      }
      if (valid) {
        easterEgg.set(true);
      }
    }

    if (ev.code == 'KeyD') {
      doggoNeedsPats.set(true);
    }
  };
}
