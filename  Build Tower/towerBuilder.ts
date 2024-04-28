export const towerBuilder = (nFloors: number): string[] => {
  const tower: string[] = [];

  for (let i = 0; i < nFloors; i++) {
    const emptyLeft = " ".repeat(nFloors - i - 1);
    const structure = "*".repeat(2 * i + 1);
    const floor = emptyLeft + structure + emptyLeft;
    tower.push(floor);
  }
  return tower
}
