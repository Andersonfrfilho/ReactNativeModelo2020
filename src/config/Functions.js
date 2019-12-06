export function fontSize(width) {
  if (width > 400) {
    return 18;
  }
  if (width > 250) {
    return 14;
  }
  return 12;
}
