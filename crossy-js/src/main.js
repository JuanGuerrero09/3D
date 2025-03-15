import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import "./style.css";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLigth = new THREE.DirectionalLight();
dirLigth.position.set(-100, -100, 200);
scene.add(dirLigth);

const camera = Camera();
scene.add(camera);

function initializeGame() {
  initializeMap();
}

initializeGame();

const renderer = Renderer();
renderer.render(scene, camera);
