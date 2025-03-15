import * as THREE from "three";
import { Renderer } from "./Renderer";
import { Camera } from "./Camera";
import { player } from "./Player";
import "./style.css";

const scene = new THREE.Scene();
scene.add(player);

const camera = Camera();
scene.add(camera);

const renderer = Renderer();
scene.add(renderer, camera);
