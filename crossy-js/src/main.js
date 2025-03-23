import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player, initializePlayer } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import { DirectionalLight } from "./components/DirectionalLight";
import "./style.css";
import { animateVehicles } from "./animateVehicles";
import "./collectUserInput";
import { animatePlayer } from "./animatePlayer";
import { generateForestMetadata } from "./utilities/generateRows";
import { hitTest } from "./hitTest";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.target = player;
player.add(dirLight);

const camera = Camera();
player.add(camera);

function initializeGame() {
  initializePlayer();
  initializeMap();

  if (scoreDOM) scoreDOM.innerText = "0";
  if (resultDOM) resultDOM.style.visibility = "hidden";
}

generateForestMetadata();

const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");

initializeGame();

document.querySelector("#retry")?.addEventListener("click", initializeGame);

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer();
  hitTest();

  renderer.render(scene, camera);
}
