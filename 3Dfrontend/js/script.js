let scene, camera, renderer, object;

function initThreeJS() {
    // Clear the scene if it's already populated
    if (scene) {
        scene.children = [];
    } else {
        scene = new THREE.Scene();
    }

    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('object-container').innerHTML = '';
    document.getElementById('object-container').appendChild(renderer.domElement);

    // Create a simple cube for demonstration
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    object = new THREE.Mesh(geometry, material);
    scene.add(object);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Add any animation or interaction logic here

    renderer.render(scene, camera);
}

function showViews() {
    const viewsContainer = document.getElementById('views-container');
    const uploadedImage = document.getElementById('uploaded-image');

    // Clear the views container
    viewsContainer.innerHTML = '';

    // Add six views by duplicating the uploaded image
    for (let i = 0; i < 6; i++) {
        const viewImage = document.createElement('img');
        viewImage.src = uploadedImage.src;
        viewImage.alt = 'View Image';
        viewsContainer.appendChild(viewImage);
    }

    document.getElementById('view-section').style.display = 'block';
    document.getElementById('show-views-button').style.display = 'none';
    document.getElementById('show-object-button').style.display = 'block';
}

function showObject() {
    document.getElementById('object-section').style.display = 'block';
    document.getElementById('show-object-button').style.display = 'none';
    initThreeJS();
}

function loadImage() {
    const input = document.getElementById('image-input');
    const container = document.getElementById('image-container');
    const showViewsButton = document.getElementById('show-views-button');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        let scene, camera, renderer, object;

        function initThreeJS() {
            // Clear the scene if it's already populated
            if (scene) {
                scene.children = [];
            } else {
                scene = new THREE.Scene();
            }
        
            // Set up camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;
        
            // Set up renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('object-container').innerHTML = '';
            document.getElementById('object-container').appendChild(renderer.domElement);
        
            // Create a simple cube for demonstration
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            object = new THREE.Mesh(geometry, material);
            scene.add(object);
        
            animate();
        }
        
        function animate() {
            requestAnimationFrame(animate);
        
            // Add any animation or interaction logic here
        
            renderer.render(scene, camera);
        }
        
        function showViews() {
            const viewsContainer = document.getElementById('views-container');
            const uploadedImage = document.getElementById('uploaded-image');
        
            // Clear the views container
            viewsContainer.innerHTML = '';
        
            // Add six views by duplicating the uploaded image
            for (let i = 0; i < 6; i++) {
                const viewImage = document.createElement('img');
                viewImage.src = uploadedImage.src;
                viewImage.alt = 'View Image';
                viewsContainer.appendChild(viewImage);
            }
        
            document.getElementById('view-section').style.display = 'block';
            document.getElementById('show-views-button').style.display = 'none';
            document.getElementById('show-object-button').style.display = 'block';
        }
        
        function showObject() {
            document.getElementById('object-section').style.display = 'block';
            document.getElementById('show-object-button').style.display = 'none';
            initThreeJS();
        }
        
        function loadImage() {
            const input = document.getElementById('image-input');
            const container = document.getElementById('image-container');
            const showViewsButton = document.getElementById('show-views-button');
        
            if (input.files && input.files[0]) {
                const reader = new FileReader();
        
                reader.onload = function (e) {
                    container.innerHTML = `<img id="uploaded-image" src="${e.target.result}" alt="Uploaded Image">`;
                    showViewsButton.style.display = 'block';  // Show the "Show Views" button
                };
        
                reader.readAsDataURL(input.files[0]);
            }
        }
        
        
        // Initially hide the second and third divs
        document.getElementById('view-section').style.display = 'none';
        document.getElementById('object-section').style.display = 'none';
        document.getElementById('show-object-button').style.display = 'none';
        
        reader.onload = function (e) {
            container.innerHTML = `<img id="uploaded-image" src="${e.target.result}" alt="Uploaded Image">`;
            showViewsButton.style.display = 'block';  // Show the "Show Views" button
        };

        reader.readAsDataURL(input.files[0]);
    }
}


// Initially hide the second and third divs
document.getElementById('view-section').style.display = 'none';
document.getElementById('object-section').style.display = 'none';
document.getElementById('show-object-button').style.display = 'none';
