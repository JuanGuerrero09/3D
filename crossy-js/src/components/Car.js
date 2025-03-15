import * as THREE from "three";
import { tileSize } from "./constants";
import { Wheel } from "./Wheel";

export function Car(initialTileIndex, direction, color) {
  const car = new THREE.Group();
  car.position.x = initialTileIndex * tileSize;

  if (!direction) car.rotation.z = Math.PI;

  const main = new THREE.Mesh(
    new THREE.BoxGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({ color, flatShading: true }),
  );
  main.position.z = 12;

  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(33, 24, 12),
    new THREE.MeshLambertMaterial({ color: "white", flatShading: true }),
  );

  cabin.position.x = -6;
  cabin.position.z = 25.5;

  car.add(cabin);

  const frontWheel = Wheel(18);
  car.add(frontWheel);

  const backWheel = Wheel(-18);
  car.add(backWheel);

  return car;
}

// export function Tree(tileIndex, height) {
//   const tree = new THREE.Group();
//   tree.position.x = tileIndex * tileSize;
//
//   const trunk = new THREE.Mesh(
//     new THREE.BoxGeometry(15, 15, 20),
//     new THREE.MeshLambertMaterial({
//       color: 0x4d2926,
//       flatShading: true,
//     }),
//   );
//   trunk.position.z = 10;
//   tree.add(trunk);
//
//   const crown = new THREE.Mesh(
//     new THREE.BoxGeometry(30, 30, height),
//     new THREE.MeshLambertMaterial({
//       color: 0x7aa21d,
//       flatShading: true,
//     }),
//   );
//   crown.position.z = height / 2 + 20;
//   tree.add(crown);
//
//   return tree;
// }
