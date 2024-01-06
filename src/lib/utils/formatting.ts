import { TargetName } from '$lib/generated/graphql';

export const prettyDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return date.toLocaleString();
};

export const prettyNumber = (n: number) => n.toLocaleString();

export const prettyBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const prettyTarget = (target: TargetName) => {
  switch (target) {
    case TargetName.Windows:
      return 'Windows Client';
    case TargetName.WindowsServer:
      return 'Windows Server';
    case TargetName.LinuxServer:
      return 'Linux Server';
  }

  return target;
};
