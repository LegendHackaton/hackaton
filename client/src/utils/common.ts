export const moveItemWithinArray = <T>(arr: T[], item: T, newIndex: number) => {
  const newArr = [...arr];
  const oldIndex = newArr.indexOf(item);
  newArr.splice(newIndex, 0, newArr.splice(oldIndex, 1)[0]);
  return newArr;
};

export const insertItemIntoArray = <T>(arr: T[], item: T, index: number) => {
  const newArr = [...arr];
  newArr.splice(index, 0, item);
  return newArr;
};

export const getAssociativeArray = <T>(arr: T[], field: keyof T) => {
  return arr.reduce((prev, curr) => {
    prev[curr[field]] = prev[curr[field]] || [];
    prev[curr[field]].push(curr);
    return prev;
  }, Object.create(null));
};
