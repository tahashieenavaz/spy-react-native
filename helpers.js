export function randomizeArray(arr) {
  let final = arr;
  final = final.sort(() => 0.5 - Math.random());
  final = final.sort(() => 0.5 - Math.random());
  final = final.sort(() => 0.5 - Math.random());
  final = final.sort(() => 0.5 - Math.random());
  final = final.sort(() => 0.5 - Math.random());
  return final;
}

export function falseArray(count) {
  return Array(count)
    .fill()
    .map(() => false);
}

export function trueArray(count) {
  return Array(count)
    .fill()
    .map(() => true);
}
