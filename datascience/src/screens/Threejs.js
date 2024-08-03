import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a sphere
const geometry = new THREE.SphereGeometry(0.5, 32, 32); // 0.5 is the radius of the sphere, 32 and 32 are the width and height segments of the sphere
const material = new THREE.MeshBasicMaterial({ color: 0x6EE9FF }); // 0x6EE9FF is the hexadecimal equivalent of rgb(110, 233, 255)
const sphere = new THREE.Mesh(geometry, material);

// Add the sphere to the scene
scene.add(sphere);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();