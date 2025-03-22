import { calculateFinalPosition } from "./calculateFinalPosition";
import { minTileIndex, maxTileIndex } from "../constants";
import { metadata as rows } from "../components/Map.js";

export default function print() {
  console.log(calculateFinalPosition);
  console.log(minTileIndex, maxTileIndex);
  console.log(rows);
}

export function endUpInValidPosition(currentPostion, moves) {
  const finalPosition = calculateFinalPosition(currentPostion, moves);
  if (
    finalPosition.rowIndex === -4 ||
    finalPosition.tileIndex === maxTileIndex + 1 ||
    finalPosition.tileIndex === minTileIndex - 1
  ) {
    console.log("False in row indexx");
    return false;
  }
  const finalRow = rows[finalPosition.rowIndex - 1];
  if (
    finalRow &&
    finalRow.type === "forest" &&
    finalRow.trees.some((tree) => tree.tileIndex === finalPosition.tileIndex)
  ) {
    console.log("false in final row");
    // Invalid move, ignore move command
    return false;
  }
  return true;
}
