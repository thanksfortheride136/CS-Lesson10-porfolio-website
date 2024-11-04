// Google Drive video preview links
const videoLinks = [
    "https://drive.google.com/file/d/19sTFHww_OC-qcueqonHvF3Ws3GzffHAh/preview", // Step 1
    "https://drive.google.com/file/d/1lmPlWGwvEKXd6jRpeJJyc3cVJohN4KfL/preview", // Step 2
    "https://drive.google.com/file/d/1oL5024HWYRzkEqrTncoS6mNuyYob2269/preview", // Step 3
    "https://drive.google.com/file/d/1sgZ4s0ebJN3Gaj5TCGH-jFyeikbA1UG7/preview", // Step 4
    "https://drive.google.com/file/d/1i7pDt3DRALBJ8dS5tvujDdpSUMN7EN9O/preview", // Step 5
    "https://drive.google.com/file/d/1JjX1T4I4SYxpoYVqHxOo8d2VwXFhmk3C/preview", // Step 6
    "https://drive.google.com/file/d/1m87X5R4IekBhuloOWDksTuifFVWulE_J/preview", // Step 7
    "https://drive.google.com/file/d/1bqlBphWEHu4cKnscCN7zU7hKQm0vmPeF/preview", // Step 8
    "https://drive.google.com/file/d/1F3ugM8Hv7o8lGK8bORnmKEfyfWa3g92j/preview", // Step 9
    "https://drive.google.com/file/d/1_QCTT-bkGnapo5L_PU_cSdESmNG1qePX/preview", // Step 10
    "https://drive.google.com/file/d/16fdiyZUdbba75gMXC4eKlweEvP5hSMNF/preview", // Step 11
    "https://drive.google.com/file/d/1FE3aAyLMqp-JW08D8jS6XUzTKmCziggw/preview", // Step 12
    "https://drive.google.com/file/d/1q3aBKKbyNcepjduGD5cQ-ANqRgMaSP8n/preview", // Step 13
    "https://drive.google.com/file/d/1p_Dce6-A6lwCYjfNNCspZvxltX1BBO8x/preview", // Step 14
    "https://drive.google.com/file/d/1b33qncnqtl2jx7nv3MLXOUjhjmyzBGMP/preview", // Step 15
    "https://drive.google.com/file/d/1ldILUkTInWNjzijBetkPipDbRDXCu2Yi/preview"  // Step 16
];

const headings = [
    'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 
    'Step 6', 'Step 7', 'Step 8', 'Step 9', 'Step 10', 
    'Step 11', 'Step 12', 'Step 13', 'Step 14', 'Step 15', 'Step 16'
];

let currentIndex = 0; // Start at the first video and heading
const stepHeading = document.querySelector("#stepHeading");

// Function to update video and heading
function updateVideo() {
    const video = document.getElementById("main-video");
    video.src = videoLinks[currentIndex]; // Set the current video link
    stepHeading.textContent = headings[currentIndex]; // Set current heading
}

// Function to go to the next video and heading
function nextVideo() {
    currentIndex = (currentIndex + 1) % videoLinks.length; // Move to next, loop to start if at the end
    updateVideo();
}

// Function to go to the previous video and heading
function prevVideo() {
    currentIndex = (currentIndex - 1 + videoLinks.length) % videoLinks.length; // Move to previous, loop to end if at the beginning
    updateVideo();
}

// Initialize with the first video and heading on page load
updateVideo();
