import * as THREE from "three";

export class SceneManager {
  scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
  }

  add(object: THREE.Object3D) {
    this.scene.add(object);
  }

  remove(object: THREE.Object3D) {
    this.scene.remove(object);
  }
}
