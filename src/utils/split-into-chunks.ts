export function splitIntoChunks<ArrayElementType>({
  inputArray,
  perChunk,
}: {
  inputArray: ArrayElementType[];
  perChunk: number;
}) {
  return inputArray.reduce(
    (resultArray: ArrayElementType[][], item: ArrayElementType, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );
}
