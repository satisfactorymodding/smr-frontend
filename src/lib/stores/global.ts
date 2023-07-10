import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const loginDialogOpen = writable<boolean>(false);

let mobileQuery: MediaQueryList;
if (browser) {
  mobileQuery = window.matchMedia('(min-width: 1280px)');
}

export const onMobile = writable<boolean>(mobileQuery && !mobileQuery.matches);
export const doggoNeedsPats = writable<boolean>(false);
export const easterEgg = writable<boolean>(false);
export const sidebarOpen = writable<boolean>(false);

if (browser) {
  mobileQuery.addEventListener('change', (data) => {
    onMobile && onMobile.set(!data.matches);
  });
}

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
