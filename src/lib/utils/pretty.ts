export const formatBytes = (value: number): string => {
  const [multiple, k, suffix] = ([1000, 'k', 'B']) as [number, string, string];
  const exp = (Math.log(value) / Math.log(multiple)) | 0;
  const size = Number((value / Math.pow(multiple, exp)).toFixed(2));
  return (
    size +
    ' ' +
    (exp
      ? (k + 'MGTPEZY')[exp - 1] + suffix
      : 'byte' + (size !== 1 ? 's' : ''))
  );
}
