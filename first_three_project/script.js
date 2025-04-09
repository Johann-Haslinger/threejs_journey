import * as THREE from 'three';

const sizes = {
  WIDTH: 800,
  HEIGHT: 600 
}

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const group = new THREE.Group();
group.position.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'red' })
)
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'green' })
)
cube2.position.x = -2
group.add(cube2);



const camera = new THREE.PerspectiveCamera(75, sizes.WIDTH / sizes.HEIGHT);
camera.position.z = 3;
camera.lookAt(cube1.position);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(sizes.WIDTH, sizes.HEIGHT);

renderer.render(scene, camera);