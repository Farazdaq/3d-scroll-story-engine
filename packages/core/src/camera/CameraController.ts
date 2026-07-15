import * as THREE from "three";

export class CameraController {
  camera: THREE.PerspectiveCamera;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
  }

  moveTo(x: number, y: number, z: number) {
    this.camera.position.set(x, y, z);
  }
}
