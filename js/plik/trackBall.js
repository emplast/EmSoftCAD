var perspectiveCamera, orthographicCamera, controls, scene, renderer, stats;
var params = {
    orthographicCamera: false
};
var frustumSize = 400;
init();
animate();
function init() {
    var aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera = new THREE.PerspectiveCamera( 60, aspect, 1, 1000 );
    perspectiveCamera.position.z = 500;
    orthographicCamera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000 );
    orthographicCamera.position.z = 500;
    
    // world
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xcccccc );
    scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
    var geometry = new THREE.CylinderBufferGeometry( 0, 10, 30, 4, 1 );
    var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
    for ( var i = 0; i < 500; i ++ ) {
        var mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = ( Math.random() - 0.5 ) * 1000;
        mesh.position.y = ( Math.random() - 0.5 ) * 1000;
        mesh.position.z = ( Math.random() - 0.5 ) * 1000;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        scene.add( mesh );
    }
    // lights
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );
    var light = new THREE.DirectionalLight( 0x002288 );
    light.position.set( - 1, - 1, - 1 );
    scene.add( light );
    var light = new THREE.AmbientLight( 0x222222 );
    scene.add( light );
    // renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    controls = new THREE.TrackballControls( perspectiveCamera, renderer.domElement );
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.keys = [ 65, 83, 68 ];
    window.addEventListener( 'resize', onWindowResize, false );
    
}

function onWindowResize() {
    var aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera.aspect = aspect;
    perspectiveCamera.updateProjectionMatrix();
    orthographicCamera.left = - frustumSize * aspect / 2;
    orthographicCamera.right = frustumSize * aspect / 2;
    orthographicCamera.top = frustumSize / 2;
    orthographicCamera.bottom = - frustumSize / 2;
    orthographicCamera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    controls.handleResize();
}
function animate() {
    requestAnimationFrame( animate );
    controls.update();
    
    render();
}
function render() {
    renderer.render( scene, perspectiveCamera );
}
