import { get, writable } from 'svelte/store';
import { browser } from '$app/env';
import { io } from 'socket.io-client';

export const customProtocolCheck = writable<unknown | null>(null);
export const hasLauncher = writable<boolean>(false);
export const launcherOpen = writable<boolean>(false);

const connectToLauncher = () => {
  new Promise(() => {
    const ws = io('http://localhost:33642', {
      transports: ['websocket']
    });

    ws.on('connect', () => {
      hasLauncher.set(true);
      launcherOpen.set(true);
    });

    ws.on('disconnect', () => {
      launcherOpen.set(false);
    });
  }).catch(console.error);
};

const open = (link: string, fallback?: () => void) => {
  if (browser) {
    new Promise(() => {
      get(customProtocolCheck).protocolCheck(link, () => {
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

export const installMod = (modReference: string) => {
  open('smmanager://install?modID=' + modReference, () => {
    window.open(modLoaderLink, '_blank');
  });
};

if (browser) {
  connectToLauncher();
}
