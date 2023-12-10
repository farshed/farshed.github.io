import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.10.1';

// Reference the HTML elements that we will need
const status = document.getElementById('status');
const image = document.getElementById('image');
const detectObjectsButton = document.getElementById('detect-objects');
const imageContainer = document.getElementById('image-container');

// Create a new object detection pipeline
status.textContent = 'Loading model...';
const detector = await pipeline('object-detection', 'Xenova/yolos-tiny');

// Enable Object Detection
detectObjectsButton.addEventListener('click', detectAndDrawObjects);
detectObjectsButton.disabled = false;
status.textContent = 'Ready';

/* ⛳️ CHALLENGE 

Complete this function with the following requirements:

1. The AI Model must be 95% sure of the detected object
2. The box coordinates must be compatible with the drawObjectBox helper function
*/
async function detectAndDrawObjects() {
  // Detect Objects
  status.textContent = 'Detecting...';
  const detectedObjects = await detector(image.src, {
    threshold: 0.95,
    percentage: true
  });

  // Draw Detected Objects
  status.textContent = 'Drawing...';
  detectedObjects.forEach((obj) => {
    drawObjectBox(obj);
  });

  status.textContent = 'Done!';
}

// Helper function that draws boxes for every detected object in the image
// ⚠️ ️This function requires box coordinates to be in percentages  ️
function drawObjectBox(detectedObject) {
  const { label, score, box } = detectedObject;
  const { xmax, xmin, ymax, ymin } = box;

  // Generate a random color for the box
  const color =
    '#' +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, 0);

  // Draw the box
  const boxElement = document.createElement('div');
  boxElement.className = 'bounding-box';
  Object.assign(boxElement.style, {
    borderColor: color,
    left: 100 * xmin + '%',
    top: 100 * ymin + '%',
    width: 100 * (xmax - xmin) + '%',
    height: 100 * (ymax - ymin) + '%'
  });

  // Draw label
  const labelElement = document.createElement('span');
  labelElement.textContent = `${label}: ${Math.floor(score * 100)}%`;
  labelElement.className = 'bounding-box-label';
  labelElement.style.backgroundColor = color;

  boxElement.appendChild(labelElement);
  imageContainer.appendChild(boxElement);
}
