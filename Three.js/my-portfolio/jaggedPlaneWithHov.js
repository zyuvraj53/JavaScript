import * as THREE from 'https://cdn.skypack.dev/three@0.126.1';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

// <-- primary

const raycaster = new THREE.Raycaster();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

// endPrimary -->

// <-- making Material

const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshPhongMaterial({
  //color: 0xff0000,
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
  vertexColors: true
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

scene.add(planeMesh);

//end Material -->

// <-- jagging

const { array } = planeMesh.geometry.attributes.position;

console.log(planeMesh.geometry.attributes.position.array);

for (let i = 3; i < array.length; i += 3) {
  const x = array[i + 0];
  const y = array[i + 1];
  const z = array[i + 2];

  array[i + 2] = z + Math.random();

  console.log(array[i]);
}

const colors = []
for(let i = 0; i <planeMesh.geometry.attributes.position.count; i++){
  console.log(i);
  colors.push(1, 0.5, 0.28);

}

console.log(colors);

planeMesh.geometry.setAttribute(
  'color',
  new THREE.BufferAttribute(new Float32Array(colors), 3)
);

// jagging ended -->

// <-- lighting

const frontLight = new THREE.DirectionalLight(0xffffff, 1);
frontLight.position.set(0, 0, 1);
scene.add(frontLight);

const backLight = new THREE.DirectionalLight(0x00ff00, 1);
backLight.position.set(0, 0, -1);
scene.add(backLight);

// end lighting -->

new OrbitControls(camera, renderer.domElement);

camera.position.z = 5;

const mouse = {
  x: undefined,
  y: undefined
}

// <-- adding animation

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  //planeMesh.rotation.x += 0.01;
  //planeMesh.rotation.y += 0.01;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(planeMesh);
  if(intersects.length > 0) {
    console.log('intersecting');
  }
}

// ending animation -->

animate()

// <-- eventListeners

addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;  //normalizing from -1 to 1 
  mouse.y = 1 - (event.clientY / innerHeight) * 2; //from left to right

})