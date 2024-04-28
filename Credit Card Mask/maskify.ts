export function maskify(cc: string): string{
  if (cc.length <= 4) {
    return cc;
  } else {
    return '#'.repeat(cc.length - 4) + cc.slice(-4);
  }
}
