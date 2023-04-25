export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const newArray = new Int8Array(length);
  newArray[position] = value;
  const dataview = new DataView(newArray.buffer);
  return dataview;
}
