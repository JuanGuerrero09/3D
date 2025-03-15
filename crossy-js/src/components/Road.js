import * as THREE from "three";
import { tileSize, tilesPerRow } from "./constants";

export function Road(rowIndex) {
  const road = new THREE.Group();
  road.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.PlaneGeometry(tilesPerRow * tileSize, tileSize, 3),
    new THREE.MeshLambertMaterial({ color: 0x454a59 }),
  );
  road.add(foundation);

  return road;
}
