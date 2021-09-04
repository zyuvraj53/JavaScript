import * as THREE from 'https://cdn.skypack.dev/three@0.126.1';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

console.log(OrbitControls);

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

scene.add(planeMesh);

const { array } = planeMesh.geometry.attributes.position;

console.log(planeMesh.geometry.attributes.position.array);

for (let i = 3; i < array.length; i += 3) {
  const x = array[i + 0];
  const y = array[i + 1];
  const z = array[i + 2];

  array[i + 2] = z + Math.random();

  console.log(array[i]);
}

const frontLight = new THREE.DirectionalLight(0xffffff, 1);
frontLight.position.set(0, 0, 1);
scene.add(frontLight);

const backLight = new THREE.DirectionalLight(0x00ff00, 1);
backLight.position.set(0, 0, -1);
scene.add(backLight);

new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  //planeMesh.rotation.x += 0.01;
  //planeMesh.rotation.y += 0.01;
}

animate()