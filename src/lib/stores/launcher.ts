import { get, writable } from 'svelte/store';
import { browser } from '$app/env';

export const customProtocolCheck = writable<unknown | null>(null);
export const hasLauncher = writable<boolean>(false);
export const launcherOpen = writable<boolean>(false);
export const launcherWs = writable<WebSocket | null>(null);

const connectToLauncher = () => {
  new Promise(() => {
    const ws = new WebSocket('ws://localhost:33642');
    launcherWs.set(ws);

    ws.onopen = () => {
      hasLauncher.set(true);
      launcherOpen.set(true);
    };

    ws.onclose = () => {
      launcherOpen.set(false);
      setTimeout(() => {
        connectToLauncher();
      }, 10000);
    };
  }).catch(console.error);
};

const open = (link: string, fallback?: () => void) => {
  if (browser) {
    new Promise(() => {
      get(customProtocolCheck)['protocolCheck'](link, () => {
        hasLauncher.set(false);
        if (fallback) {
          fallback();
        }
      });
    }).catch(console.error);
  }
};

const modLoaderLink = 'https://smm.ficsit.app/';

export const pingLauncher = () => {
  open('smmanager://ping', () => {
    window.open(modLoaderLink, '_blank');
  });
};

export const installMod = (modId: string) => {
  open('smmanager://install?modID=' + modId, () => {
    window.open(modLoaderLink, '_blank');
  });
};

if (browser) {
  connectToLauncher();
}
