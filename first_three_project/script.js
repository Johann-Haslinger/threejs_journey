import * as THREE from "three";
import gsap from "gsap";

const sizes = {
  WIDTH: 800,
  HEIGHT: 600,
};

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "red" }));
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, sizes.WIDTH / sizes.HEIGHT);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.WIDTH, sizes.HEIGHT);

gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 });

const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
