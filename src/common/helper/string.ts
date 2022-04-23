export const NumberOfRow = (
  index: number,
  current: number,
  pageSize?: number
) => {
  if (pageSize) {
    return (current - 1) * pageSize + index + 1;
  }
  return null;
};
