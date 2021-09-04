import * as THREE from 'https://cdn.skypack.dev/three@0.126.1';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 10000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const torusKnotGeometry = new THREE.TorusKnotGeometry(1, 0.4, 128, 32, 5, 8);
const torusKnotMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);

scene.add(torusKnotMesh);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 1);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  torusKnotMesh.rotation.x += 0.01;
  torusKnotMesh.rotation.y += 0.01;
}

animate()