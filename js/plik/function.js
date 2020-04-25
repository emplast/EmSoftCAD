/*
 * 
 * @type THREE JS
 * 
 * @author Piotr Majewski EmSoft
 * @e-mail:emplast@wp.pl 
 * 
 * 
 * 
 * 
 * 
 */

var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};
var raycaster = new THREE.Raycaster();
var clickCanvas = 0;
var objects = [];
var p_o = [];
var mouse = new THREE.Vector2();
var width = window.innerWidth;
var height = window.innerHeight;
var group = new THREE.Group();
var group_1 = new THREE.Group();
var group_2 = new THREE.Group();
var loader = new THREE.FontLoader();
var lineEnd = false;
var m = 0;
var n = 0;
var f = 0;
var o = false;
var p = false;
var l = false;
var k = false;
var c = false;
var x = false;
var block = false;
var scale = 1;
var scaleO = scale;
var g_2El = 0;
var startLine = new THREE.Vector3();
var endLine = [new THREE.Vector3()];
var endLineK = new THREE.Vector3();
var quaternionBlock = new THREE.Quaternion();
var container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute('id', 'container');
// container.setAttribute('class','row');
var scene = new THREE.Scene();
var camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
var renderer = new THREE.WebGLRenderer({
    alpha: true
});
var three = THREE;
scene.background = new three.Color(0xedeff2);
renderer.setSize(width, height);
renderer.domElement.id = "can";
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);
//$('#can').addClass('col-sm-12');
var text2 = document.createElement('div');
text2.style.position = 'absolute';
text2.style.width = '150px';
text2.style.height = 'auto';
text2.setAttribute('id', 'text');
text2.innerHTML = 'Część nr 1';
text2.style.backgroundColor = "transparent";
text2.style.color = "blue";
text2.style.left = 100 + 'px';
text2.style.top = 150 + 'px';
document.body.appendChild(text2);
var icon = document.createElement('div');
icon.style.position = 'absolute';
icon.setAttribute('class', 'col-sm-9');
icon.style.backgroundColor = 'transparent';
icon.style.left = 50 + 'px';
icon.style.top = 20 + 'px';
document.body.appendChild(icon);
icon.setAttribute('id', 'icon');
$('#icon').append('<img  id="pushY" src="icon/Part_Line_Parametric.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2;" width="25"height="25">');
$('#icon').append('<img height="25" id="pushZ" src="icon/Draft_Rectangle.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25">');
$('#icon').append('<img height="25" id="pushA" src="icon/Part_Circle_Parametric.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25">')
$('#icon').append('<img height="25" id="pushB" src="icon/Draft_Polygon.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25">');
$('#icon').append('<img height="25" id="pushC" src="icon/Draft_Point.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25"></br></br>');
// </br>
$('#icon').append('<img height="25" id="pushX" src="icon/Sketcher_External.png" style="float:left;margin-left: 10px;border: 0.5px solid #edeff2" width="25">');
$('#icon').append('<img height="25" id="pushD" src="icon/Part_Cylinder.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25">');
$('#icon').append('<div id="cylinder" style="display:none"></div>');
$('#cylinder').append('<img height="30" id="cylinderA" src="icon/Fem-2D-1.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="30"></img>');
$('#cylinder').append('<img height="30" id="cylinderB" src="icon/Fem-2D.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="30"></img>');
$('#icon').append('<img height="25" id="pushE" src="icon/Part_Workbench.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25">');
$('#icon').append('<img height="25" id="pushF" src="icon/Part_Extrude.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25">');
$('#icon').append('<img height="25" id="pushG" src="icon/if_info_blue_40801.png" style="float:left;margin-left: 10px;border:0.5px solid #edeff2" width="25">');
var footer = document.createElement('div');
footer.style.position = 'absolute';
footer.setAttribute('id', 'footer');
footer.setAttribute('class', 'col-sm-12');
footer.style.bottom = 0 + 'px';
document.body.appendChild(footer);
$('#footer').append('<div class="col-sm-6" id="footerInput">');
$('#footerInput').append('<input type="text" class="form-control" id="text1" disabled></br>');
$('#footerInput').append('<input type="text" class="form-control" id="text2"></br>');
$('#footer').append('<div id="footerInfo" class="col-sm-3"></div>')
$('#footer').append('<div id="footerCopright" class="col-sm-3"></div>');
$('#footerInfo').append('<p id="pLine"></p>');
$('#footerInfo').append('<p id="pFooter_1"></p>');
$('#footerCopright').append('<p id="pFooter"></p>');
/* var controls = new THREE.OrbitControls(camera);
 controls.addEventListener('change', render); // remove when using animation loop
 controls.enableRotate = true;
 controls.enableZoom = false;*/
var light = new THREE.DirectionalLight(0xffffff, 2);
//light.castShadow = true;
//light.shadowCameraVisible = true;
light.position.set(10, 10, 1);
scene.add(light);//group_2.add(light);
//scene.add( new THREE.DirectionalLightHelper(light, 5) );
scene.add(new THREE.AmbientLight(0x93969b, 2));
var geometry = new THREE.CylinderGeometry(1, 1, 20, 32);
var material = new THREE.MeshBasicMaterial({
    color: 0x144c13
});
var cylinder = new THREE.Mesh(geometry, material);
var geometry = new THREE.CylinderGeometry(0, 1.5, 5, 32);
var stozek = new THREE.Mesh(geometry, material);
var geometryY = new THREE.CylinderGeometry(1, 1, 20, 32);
var materialY = new THREE.MeshBasicMaterial({
    color: 0xfc0a02
});
var cylinderY = new THREE.Mesh(geometryY, materialY);
var geometryY = new THREE.CylinderGeometry(0, 1.5, 5, 32);
var stozekY = new THREE.Mesh(geometryY, materialY);
var geometryZ = new THREE.CylinderGeometry(1, 1, 20, 32);
var materialZ = new THREE.MeshBasicMaterial({
    color: 0x0b0be5
});
var cylinderZ = new THREE.Mesh(geometryZ, materialZ);
var geometryZ = new THREE.CylinderGeometry(0, 1.5, 5, 32);
var stozekZ = new THREE.Mesh(geometryZ, materialZ);
var geometry = new THREE.SphereGeometry(3, 32, 32);
var material = new THREE.MeshBasicMaterial({
    color: 0xe88f0b
});
var kula = new THREE.Mesh(geometry, material);
/* front */
var geometryP1 = new THREE.PlaneGeometry(40, 40, 32);
var materialPlane1 = new THREE.MeshBasicMaterial({
    color: 0xd83c2b
});
var plane = new THREE.Mesh(geometryP1, materialPlane1);
plane.name = 'front';
/* back  */
var geometryP1 = new THREE.PlaneGeometry(40, 40, 32);
var plane1 = new THREE.Mesh(geometryP1, materialPlane1);
plane1.name = 'back';
/* left */
var geometryP2 = new THREE.PlaneGeometry(40, 40, 32);
var materialPlane12 = new THREE.MeshBasicMaterial({
    color: 0x039625
});
var plane2 = new THREE.Mesh(geometryP2, materialPlane12);
plane2.name = 'left';
/* right */
var geometryP2 = new THREE.PlaneGeometry(40, 40, 32);
var plane3 = new THREE.Mesh(geometryP2, materialPlane12);
plane3.name = 'right';
/* bottom */
var geometryP3 = new THREE.PlaneGeometry(40, 40, 32);
var materialPlane13 = new THREE.MeshBasicMaterial({
    color: 0x1262a8
});
var plane4 = new THREE.Mesh(geometryP3, materialPlane13);
plane4.name = 'bottom';
/* top */
var geometryP3 = new THREE.PlaneGeometry(40, 40, 32);
var plane5 = new THREE.Mesh(geometryP3, materialPlane13);
plane5.name = 'top';
var material1 = new THREE.LineBasicMaterial({
    color: 0x050505
});
var geometryP4 = new THREE.PlaneGeometry(250, 250, 250);
var materialP4 = new THREE.MeshBasicMaterial({ color: 0x272828, transparent: true, opacity: 0.25, side: THREE.DoubleSide, vertexColors: THREE.FaceColors });
var plane6 = new THREE.Mesh(geometryP4, materialP4);
plane6.name = "plane6";
var geometryP5 = new THREE.PlaneGeometry(250, 250, 250);
var materialP5 = new THREE.MeshPhongMaterial({ color: 0x272828, transparent: true, opacity: 0.25, side: THREE.DoubleSide, vertexColors: THREE.FaceColors });
var plane7 = new THREE.Mesh(geometryP5, materialP5);
plane7.name = "plane7";
var geometryP6 = new THREE.PlaneGeometry(250, 250, 250);
var materialP6 = new THREE.MeshPhongMaterial({ color: 0x272828, transparent: true, opacity: 0.25, side: THREE.DoubleSide, vertexColors: THREE.FaceColors });
var plane8 = new THREE.Mesh(geometryP6, materialP6);
plane8.name = "plane8";
var geometry1 = new THREE.Geometry();
geometry1.vertices.push(new THREE.Vector3(-20, -20, -20), new THREE.Vector3(20, -20, -20), new THREE.Vector3(20, 20, -20), new THREE.Vector3(-20, 20, -20), new THREE.Vector3(-20, -20, -20), new THREE.Vector3(-20, -20, 20), new THREE.Vector3(-20, 20, 20), new THREE.Vector3(-20, 20, -20), new THREE.Vector3(20, 20, -20), new THREE.Vector3(20, -20, -20), new THREE.Vector3(20, -20, 20), new THREE.Vector3(20, 20, 20), new THREE.Vector3(20, 20, -20), new THREE.Vector3(20, 20, 20), new THREE.Vector3(20, -20, 20), new THREE.Vector3(-20, -20, 20), new THREE.Vector3(-20, 20, 20), new THREE.Vector3(20, 20, 20));
geometry1.computeBoundingSphere();
var line = new THREE.Line(geometry1, material1);
stozekZ.translateY(22.5);
cylinderZ.translateY(10);
cylinderY.rotateZ(toRadians(-90));
stozekY.rotateZ(toRadians(-90));
cylinderY.translateY(10);
stozekY.translateY(22.5);
cylinder.rotateX(toRadians(-90));
stozek.rotateX(toRadians(-90));
cylinder.translateY(10);
stozek.translateY(22.5);
plane.translateZ(20);
plane1.translateZ(-20);
plane1.rotateY(toRadians(180));
plane2.rotateY(toRadians(-90));
plane2.translateZ(20);
plane3.rotateY(toRadians(90));
plane3.translateZ(20);
plane4.rotateX(toRadians(90));
plane4.translateZ(20);
plane5.rotateX(toRadians(-90));
plane5.translateZ(20);
plane7.rotateY(toRadians(90));
plane8.rotateX(toRadians(90));
/* world rotate on axis x and y */
// group.rotateX(toRadians(30));
// group.rotateY(toRadians(-30));
// group_1.rotateX(toRadians(30));
// group_1.rotateY(toRadians(-30));
group.setRotationFromEuler(new THREE.Euler(toRadians(30), toRadians(-30), 0));
group_1.setRotationFromEuler(new THREE.Euler(toRadians(30), toRadians(-30), 0));
group_2.setRotationFromEuler(new THREE.Euler(toRadians(30), toRadians(-30), 0));

group.add(cylinder);
group.add(cylinderY);
group.add(cylinderZ);
group.add(stozek);
group.add(stozekY);
group.add(stozekZ);
group.add(kula)
group.add(plane6);
group.add(plane7);
group.add(plane8);
group_1.add(line);
group.position.set(0, 0, -10);
group_1.position.set($('#can').width() / 2 - 100, $('#can').height() / 2 - 100, -150);
group_1.add(plane); //front
group_1.add(plane1); //back
group_1.add(plane2); //left
group_1.add(plane3); //right
group_1.add(plane4); //top
group_1.add(plane5); //bottom


camera.position.set(0, 0, 450);


var pozycja = [new THREE.Vector3()];
var radius_1, segments = 32,
    srednica = 0;
var a = [new THREE.Vector3()];
var dlugosc = [new THREE.Vector3()];
var depth,
    v = [new THREE.Vector3()],
    x_v = [new THREE.Vector3()],
    v_z = 0;

loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
    var xMid, text;
    var textShape = new THREE.BufferGeometry();
    var textShapeR = new THREE.BufferGeometry();
    var textShapeL = new THREE.BufferGeometry();
    var textShapeT = new THREE.BufferGeometry();
    var textShapeD = new THREE.BufferGeometry();
    var textShapeB = new THREE.BufferGeometry();
    var color = 0xf9fafc;
    var matLite = new THREE.MeshBasicMaterial({
        color: color
    });
    var message = "Front";
    var shapes = font.generateShapes(message, 8, 2);
    var geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();
    xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);
    textShape.fromGeometry(geometry);
    text = new THREE.Mesh(textShape, matLite);
    var messageR = "Right";
    var shapesR = font.generateShapes(messageR, 8, 2);
    var geometryR = new THREE.ShapeGeometry(shapesR);
    geometryR.computeBoundingBox();
    xMidR = -0.5 * (geometryR.boundingBox.max.x - geometryR.boundingBox.min.x);
    geometryR.translate(xMidR, 0, 0);
    textShapeR.fromGeometry(geometryR);
    textR = new THREE.Mesh(textShapeR, matLite);
    var messageL = "Left";
    var shapesL = font.generateShapes(messageL, 8, 2);
    var geometryL = new THREE.ShapeGeometry(shapesL);
    geometryL.computeBoundingBox();
    xMidL = -0.5 * (geometryL.boundingBox.max.x - geometryL.boundingBox.min.x);
    geometryL.translate(xMidL, 0, 0);
    textShapeL.fromGeometry(geometryL);
    textL = new THREE.Mesh(textShapeL, matLite);
    var messageT = "Top";
    var shapesT = font.generateShapes(messageT, 8, 2);
    var geometryT = new THREE.ShapeGeometry(shapesT);
    geometryT.computeBoundingBox();
    xMidT = -0.5 * (geometryT.boundingBox.max.x - geometryT.boundingBox.min.x);
    geometryT.translate(xMidT, 0, 0);
    textShapeT.fromGeometry(geometryT);
    textT = new THREE.Mesh(textShapeT, matLite);
    var messageD = "Down";
    var shapesD = font.generateShapes(messageD, 8, 2);
    var geometryD = new THREE.ShapeGeometry(shapesD);
    geometryD.computeBoundingBox();
    xMidD = -0.5 * (geometryD.boundingBox.max.x - geometryD.boundingBox.min.x);
    geometryD.translate(xMidD, 0, 0);
    textShapeD.fromGeometry(geometryD);
    textD = new THREE.Mesh(textShapeD, matLite);
    var messageB = "Back";
    var shapesB = font.generateShapes(messageB, 8, 2);
    var geometryB = new THREE.ShapeGeometry(shapesB);
    geometryB.computeBoundingBox();
    xMidB = -0.5 * (geometryB.boundingBox.max.x - geometryB.boundingBox.min.x);
    geometryB.translate(xMidB, 0, 0);
    textShapeB.fromGeometry(geometryB);
    textB = new THREE.Mesh(textShapeB, matLite);
    group_1.add(text);
    group_1.add(textR);
    group_1.add(textL);
    group_1.add(textT);
    group_1.add(textD);
    group_1.add(textB);
    text.translateZ(20);
    textR.rotateY(toRadians(90));
    textR.translateZ(21);
    textL.rotateY(toRadians(-90));
    textL.translateZ(21);
    textT.rotateX(toRadians(-90));
    textT.translateZ(21);
    textD.rotateX(toRadians(90));
    textD.translateZ(21);
    textB.rotateY(toRadians(180));
    textB.translateZ(21);
});
scene.add(group, group_1, group_2);
objects.push(plane, plane1, plane2, plane3, plane4, plane5, cylinder,plane6,plane7,plane8);
p_o.push(plane6, plane7, plane8);



function onMouseDown(e) {


    planeColor(e);
    isDragging = true;
    leftButtoMouse(e);
    raycasterClik();
    
    if (l) {
        block = true;
        linia(e);
    }
    if (k) {
        block = true;
        kwadrat(e);
    }
    if (c) {
        block = true;
        okreg(e);
    }
    if (o) {
        block = true;
        walec(e);
    }
    if (p) {
        block = true;
        szescian(e);
    }


}


function onMouseMove(e) {
    e.preventDefault();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycasterMove(mouse);
    draging(e);
    mousePosition(e);
    
    if (l)
        liniaM(e);
    if (k)
        kwadratM(e);
    if (c)
        okregM(e);
    if (o)
        walecM(e);
    if (p)
        szescianM(e);
}

function onMouseUp(e) {
    isDragging = false;
}

function onKeyDown(e) {
    escDelete(e);

}

function onMouseWheel(e) {

    scaleCanvas(e);
    // console.log(e.deltaY);
}

function contextmenu(e) {

    if (this.enabled === false) return;

    e.preventDefault();

}


/*
*
*
*  EVENTY
*
*
*
*
*/

renderer.domElement.addEventListener("mousedown", onMouseDown);
renderer.domElement.addEventListener("mousemove", onMouseMove,false);
renderer.domElement.addEventListener("mouseup", onMouseUp);
document.addEventListener("keydown", onKeyDown);
document.addEventListener("wheel", onMouseWheel);
renderer.domElement.addEventListener('contextmenu', contextmenu, false);

//PRZYCISKI
document.getElementById("pushX").onclick = function () {
    m++;
    if (m % 2 != 0) {
        document.getElementById("pushX").style.backgroundColor = "red";
        document.getElementById("text1").innerHTML = "";
    } else {
        document.getElementById("pushX").style.backgroundColor = "transparent";
        m = 0;
        block = false;
    }
}
document.getElementById("pushY").onclick = function () {
    n++;
    if (n % 2 != 0) {
        l = true;
        if (group_2.children.length > 0) {
            lineEnd = true;
        } else {
            lineEnd = false;
            block = false;
        }
        document.getElementById("pushY").style.backgroundColor = "red";
    } else {
        l = false;
        block = false;
        document.getElementById("pushY").style.backgroundColor = "transparent";
        group_2.remove(group_2.children[group_2.children.length - 1]);
        lineEnd = false;
        clickCanvas = 0;
        endLine.splice(1, endLine.length);
        n = 0;
    }
}
document.getElementById("pushZ").onclick = function () {
    n++;
    if (n % 2 != 0) {
        k = true;
        document.getElementById("pushZ").style.backgroundColor = "red";
    } else {
        k = false;
        block = false;
        document.getElementById("pushZ").style.backgroundColor = "transparent";
        clickCanvas = 0;
        n = 0;
    }
}
document.getElementById("pushA").onclick = function () {
    n++;
    if (n % 2 != 0) {
        c = true;
        document.getElementById("pushA").style.backgroundColor = "red";
    } else {
        c = false;
        block = false;
        document.getElementById("pushA").style.backgroundColor = "transparent";
        clickCanvas = 0;
        n = 0;
    }
}
document.getElementById("pushG").onclick = function () {
    alert("Kliknełeś na #pushG");
}
document.getElementById("pushC").onclick = function () {
    alert("Kliknełeś na #pushC");
}
document.getElementById("pushD").onclick = function () {
    $('#cylinder').fadeToggle();
    n = -1;
    $('#cylinderA').click();
    n = -1;
    $('#cylinderB').click();
}
document.getElementById("cylinderA").onclick = function () {
    n++;
    if (n % 2 != 0) {
        o = true;
        f = 1;
        document.getElementById("cylinderA").style.backgroundColor = "red";
    } else {
        o = false;
        block = false;
        document.getElementById("cylinderA").style.backgroundColor = "transparent";
        n = 0;
    }
}
document.getElementById("cylinderB").onclick = function () {
    n++;
    if (n % 2 != 0) {
        o = true;
        f = 0;
        document.getElementById("cylinderB").style.backgroundColor = "red";
    } else {
        o = false;
        block = false;
        document.getElementById("cylinderB").style.backgroundColor = "transparent";
        n = 0;
    }
}
document.getElementById("pushE").onclick = function () {
    n++;
    if (n % 2 != 0) {
        p = true;
        document.getElementById("pushE").style.backgroundColor = "red";
    } else {
        p = false;
        block = false;
        document.getElementById("pushE").style.backgroundColor = "transparent";
        clickCanvas = 0;
        n = 0;
    }
}
document.getElementById("pushF").onclick = function () {
    n++;
    if (n % 2 != 0) {
        x = true;
        document.getElementById("pushF").style.backgroundColor = "red";
    } else {
        x = false;
        document.getElementById("pushF").style.backgroundColor = "transparent";
        clickCanvas = 0;
        n = 0;
    }
}

function planeColor(e) {

    mouse.x = ((e.clientX) / document.getElementById("can").width) * 2 - 1;
    mouse.y = -((e.clientY) / document.getElementById("can").height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var inter = raycaster.intersectObjects(p_o);
    if (inter.length > 0) {

        if (!block) {


            inter[0].object.material.color.set(0xff0000);
            inter[0].object.geometry.colorsNeedUpdate = true;
            block = true;
            toRotate(inter, false);
        }


    } else if (!block) {

        plane6.material.color.set(0x272828);
        plane7.material.color.set(0x272828);
        plane8.material.color.set(0x272828);

        block = false;
        plane6.geometry.colorsNeedUpdate = true;
        plane7.geometry.colorsNeedUpdate = true;
        plane8.geometry.colorsNeedUpdate = true;
    }

    render();
}

function draging(e) {
    var deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y
    };
    if (isDragging && !block) {
        var eu = new THREE.Euler(toRadians(deltaMove.y * 0.3), toRadians(deltaMove.x * 0.3), 0, 'XYZ');
        var deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(eu);
        group.quaternion.multiplyQuaternions(deltaRotationQuaternion, group.quaternion);
        group_1.quaternion.multiplyQuaternions(deltaRotationQuaternion, group_1.quaternion);
        group_2.quaternion.multiplyQuaternions(deltaRotationQuaternion, group_2.quaternion);
    }
    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
}

function leftButtoMouse(e) {
    if (e.button == 2) {
        if (l == true) {
            $('canvas').oncontextmenu = function () {
                return false;
            };
            $('#pushY').click();
        }
        if (k == true) {
            $('#pushZ').click();
        }
        if (c == true) {
            $('#pushA').click();
        }
        if (o == true) {
            $('#pushD').click();
        }
        if (p == true) {
            $('#pushE').click();
        }
        block = false;
        planeColor(e)
    }
}

function escDelete(e) {
    //Esc
    if (e.which == 27) {
        if (l == true) {
            $('#pushY').click();
        }
        if (k == true) {
            $('#pushZ').click();
        }
        if (c == true) {
            $('#pushA').click();
        }
        if (o == true) {
            $('#pushD').click();
        }
        if (p == true) {
            $('#pushE').click();
        }
        planeColor(e);
    }
    // Delete
    if (e.which == 13) {
        if ($('#text_z1').val() != "") {
            $('#pushX1').click();
        }
    }
}

function scaleCanvas(e) {
    if (e.deltaY < 0) {
        scale = scale + 0.01;
        if (scaleO < 1.6) {
            scaleO = scale;
        } else {
            scaleO = 1.6;
        }
        group_2.scale.set(scale, scale, scale);
        group.scale.set(scaleO, scaleO, scaleO);
    } else {
        if (scale > 0.0001) {
            scale = scale - 0.01;
            scaleO = scale;
        } else {
            scale = 0.0001;
            scaleO = scale;
        }
        if (scaleO < 1.6) {
            scaleO = scale;
        } else {
            scaleO = 1.6;
        }
        group_2.scale.set(scale, scale, scale);
        group.scale.set(scaleO, scaleO, scaleO);

    }
    var mouse=new THREE.Vector2();
    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;
    document.getElementById("pFooter_1").innerHTML =
        '<p style="color:red">X:'
        + mouse.x + '<p style="color:blue;">Y:'
        + mouse.y + '<p style="color:green;">Z:'
        + group_1.position.z / scale + '</p></p></p>';
}

function mousePosition(e) {
    var mouse=new THREE.Vector2();
    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;
    document.getElementById("pFooter_1").innerHTML =
        '<p style="color:red">X:'
        + mouse.x + '<p style="color:blue;">Y:'
        + mouse.y + '<p style="color:green;">Z:'
        + group_1.position.z / scale + '</p></p></p>';
        
}

function linia(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;


    var geometryLine = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({
        color: 0x050505
    });
    switch (clickCanvas) {
        case 0:
            startLine.x = mouse.x;
            startLine.y = mouse.y;
            startLine.z = 0;
            break;
        case 1:
            endLine.push(new THREE.Vector3(mouse.x, mouse.y, 0));
            geometryLine.vertices.push(startLine);
            geometryLine.vertices.push(endLine[clickCanvas]);
            geometryLine.computeBoundingBox();
            var line = new THREE.Line(geometryLine, material);
            line.boundingSphere = null;
            line.name = 'lineProba_' + (clickCanvas - 1);
            line.rotateZ(-group_1.rotation._z);
            line.rotateY(-group_1.rotation._y);
            line.rotateX(-group_1.rotation._x);
            if (lineEnd == false) {
                for (var i = 0; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
                group_2.add(line);
                objects.push(line);
            } else {
                for (var i = g_2El; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
            }
            g_2El = group_2.children.length;
            break;
        default:
            endLine.push(new THREE.Vector3(mouse.x, mouse.y, 0));
            geometryLine.vertices.push(endLine[clickCanvas - 1]);
            geometryLine.vertices.push(endLine[clickCanvas]);
            geometryLine.computeBoundingBox();
            var line = new THREE.Line(geometryLine, material);
            line.boundingSphere = null;
            line.name = 'lineProba_' + (clickCanvas - 1);
            line.rotateZ(-group_1.rotation._z);
            line.rotateY(-group_1.rotation._y);
            line.rotateX(-group_1.rotation._x);
            if (lineEnd == false) {
                for (var i = clickCanvas - 1; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
                group_2.add(line);
                objects.push(line);
            } else {
                for (var i = clickCanvas - 1 + g_2El; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
                group_2.add(line);
                objects.push(line);
            }
            g_2El = group_2.children.length;
            break;
    }
    clickCanvas++;
    objects.splice(7, objects.length);
    for (var i = 0; i < group_2.children.length; i++) {
        objects.push(group_2.children[i]);
    }
}

function kwadrat(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;


    switch (clickCanvas) {
        case 0:
            a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            break;
        default:
            a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            break;
    }
    clickCanvas++;
    objects.splice(7 + g_2El, objects.length);
    for (var i = 0 + g_2El; i < group_2.children.length; i++) {
        objects.push(group_2.children[i]);
    }
    g_2El = group_2.children.length;
}

function okreg(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

    switch (clickCanvas) {
        case 0:
            pozycja[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            pozycja[1].applyEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
            break;
        default:
            pozycja[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            pozycja[1].applyEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
            break;
    }
    clickCanvas++;
    objects.splice(7 + g_2El, objects.length);
    for (var i = 0 + g_2El; i < group_2.children.length; i++) {
        objects.push(group_2.children[i]);
    }
    g_2El = group_2.children.length;
    render();
}

function walec(e) {
    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

    switch (clickCanvas) {
        case 0:
            pozycja[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            pozycja[1].applyEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
            break;

    }
    clickCanvas++;
    objects.splice(7 + g_2El, objects.length);
    for (var i = 0 + g_2El; i < group_2.children.length; i++) {
        objects.push(group_2.children[i]);
    }
    g_2El = group_2.children.length;

}

function szescian(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

    switch (clickCanvas) {
        case 0:
            a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            break;
    }
    clickCanvas++;
    objects.splice(7 + g_2El, objects.length);
    for (var i = 0 + g_2El; i < group_2.children.length; i++) {
        objects.push(group_2.children[i]);
    }
    g_2El = group_2.children.length;

    render();
}

function liniaM(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({
        color: 0x050505
    });
    switch (clickCanvas) {
        case 0:
            break;
        case 1:
            endLineK.x = mouse.x;
            endLineK.y = mouse.y;
            endLineK.z = 0;
            geometry.vertices.push(startLine, endLineK);
            var line = new THREE.Line(geometry, material);
            line.rotateZ(-group_1.rotation._z);
            line.rotateY(-group_1.rotation._y);
            line.rotateX(-group_1.rotation._x);
            if (lineEnd == false) {
                for (var i = 0; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
                group_2.add(line);
            } else {
                for (var i = g_2El; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
                group_2.add(line);
            }
            break;
        default:
            endLineK.x = mouse.x;
            endLineK.y = mouse.y;
            endLineK.z = 0;
            geometry.vertices.push(endLine[clickCanvas - 1], endLineK);
            var line = new THREE.Line(geometry, material);
            line.rotateZ(-group_1.rotation._z);
            line.rotateY(-group_1.rotation._y);
            line.rotateX(-group_1.rotation._x);
            if (lineEnd == false) {
                for (var i = clickCanvas - 1; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
                group_2.add(line);
            } else {
                for (var i = clickCanvas - 1 + g_2El; i < group_2.children.length; i++) {
                    group_2.remove(group_2.children[i]);
                }
                group_2.add(line);
            }
            break;
    }
}

function kwadratM(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;


    var material = new THREE.LineBasicMaterial({
        color: 0x050505
    });
    var geometry = new THREE.Geometry();
    switch (clickCanvas) {

        case 1:
            a[3] = new THREE.Vector3(mouse.x, mouse.y, 0);
            a[2] = new THREE.Vector3(a[1].x, a[3].y, 0);
            a[4] = new THREE.Vector3(a[3].x, a[1].y, 0);
            a[5] = new THREE.Vector3(a[1].x, a[1].y, 0);
            geometry.vertices.push(a[1], a[2], a[3], a[4], a[5]);
            var box = new THREE.Line(geometry, material);
            box.rotateZ(-group_1.rotation._z);
            box.rotateY(-group_1.rotation._y);
            box.rotateX(-group_1.rotation._x);
            for (var i = 0 + g_2El; i < group_2.children.length; i++) {
                group_2.remove(group_2.children[i])
            }
            group_2.add(box);
            break;
        default:
            a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            clickCanvas = 0;
            break;
    }
    render();
}

function okregM(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

    switch (clickCanvas) {
        case 0:
            break;
        case 1:
            var radius,
                segments = 32,
                material = new THREE.LineBasicMaterial({
                    color: 0x050505
                }),
                srednica = new THREE.Vector3(mouse.x, mouse.y, 0);
            srednica.applyEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
            radius = srednica.distanceTo(pozycja[1]);
            geometry = new THREE.CircleGeometry(radius, segments, 0, (Math.PI * 2).toFixed(2)),
                geometry.vertices.shift();
            circle = new THREE.Line(geometry, material);
            circle.rotateZ(-group_1.rotation._z);
            circle.rotateY(-group_1.rotation._y);
            circle.rotateX(-group_1.rotation._x);
            circle.position.set(pozycja[1].x, pozycja[1].y, pozycja[1].z);
            for (var i = 0 + g_2El; i < group_2.children.length; i++) {
                group_2.remove(group_2.children[i])
            }
            group_2.add(circle);
            break;
        default:
            p[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            pozycja[1].applyEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
            clickCanvas = 0;
            break;
    }
    render();

}

function walecM(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

    switch (clickCanvas) {
        case 1:
            var material = new THREE.LineBasicMaterial({
                color: 0x050505
            });
            segments = 32;
            srednica = new THREE.Vector3(mouse.x, mouse.y, 0);
            srednica.applyEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
            radius_1 = srednica.distanceTo(pozycja[1]);
            geometry = new THREE.CircleGeometry(radius_1, segments, 0, (Math.PI * 2).toFixed(2)),
                geometry.vertices.shift();
            circle = new THREE.Line(geometry, material),
                circle.position.set(pozycja[1].x, pozycja[1].y, pozycja[1].z);
            circle.rotateZ(-group_1.rotation._z);
            circle.rotateY(-group_1.rotation._y);
            circle.rotateX(-group_1.rotation._x);
            circle.name = 'Circle';
            for (var i = 0 + g_2El; i < group_2.children.length; i++) {
                group_2.remove(group_2.children[i])
            }
            group_2.add(circle);
            break;
        case 2:

            segments = 32;
            dlugosc[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            var height = dlugosc[1].distanceTo(pozycja[1]);
            var geometry = new THREE.CylinderGeometry(radius_1, radius_1, height, segments, 2, false, 0, Math.PI * 2, f);
            var material = new THREE.MeshPhongMaterial({
                color: 0x4d4e4f
            });
            var cylinder = new THREE.Mesh(geometry, material);
            cylinder.position.set(pozycja[1].x, pozycja[1].y, pozycja[1].z);
            cylinder.rotateZ(-group_1.rotation._z);
            cylinder.rotateY(-group_1.rotation._y);
            cylinder.rotateX(-group_1.rotation._x - toRadians(90));
            cylinder.name = 'Walec';
            for (var i = 0 + g_2El; i < group_2.children.length; i++) {
                group_2.remove(group_2.children[i])
            }
            group_2.add(cylinder);
            break;
        default:
            clickCanvas = 0;
            break;
    }
    render();
}

function szescianM(e) {

    mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
    mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({
        color: 0x050505
    });
    switch (clickCanvas) {

        case 1:

            a[3] = new THREE.Vector3(mouse.x, mouse.y, 0);
            a[2] = new THREE.Vector3(a[1].x, a[3].y, 0);
            a[4] = new THREE.Vector3(a[3].x, a[1].y, 0);
            a[5] = new THREE.Vector3(a[1].x, a[1].y, 0);
            geometry.vertices.push(a[1], a[2], a[3], a[4], a[5]);
            var box = new THREE.Line(geometry, material);
            box.name = 'Box_' + g_2El;
            box.rotateZ(-group_1.rotation._z);
            box.rotateY(-group_1.rotation._y);
            box.rotateX(-group_1.rotation._x);

            for (var i = 0 + g_2El; i < group_2.children.length; i++) {
                group_2.remove(group_2.children[i])
            }
            group_2.add(box);
            break;
        case 2:
            a[6] = new THREE.Vector3(mouse.x, mouse.y, 0);
            // var width = a[2].distanceTo(a[3]);
            // var height = a[1].distanceTo(a[2]);
            // var depth = a[1].distanceTo(a[6]);
            var width = a[3].x - a[1].x;
            var height = a[3].y - a[1].y;
            var depth = a[1].x - a[6].y;
            geometry = new THREE.BoxGeometry(width, height, depth, 2, 2, 2, 'b');
            material = new THREE.MeshPhongMaterial({
                color: 0x4d4e4f
            });
            var cube = new THREE.Mesh(geometry, material);
            var vec = new THREE.Vector3(a[1].x, a[1].y, 0);
            vec.applyEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
            cube.position.set(vec.x, vec.y, vec.z);
            cube.rotateZ(-group_1.rotation._z);
            cube.rotateY(-group_1.rotation._y);
            cube.rotateX(-group_1.rotation._x);
            cube.name = 'Cube_' + g_2El;

            for (var i = 0 + g_2El; i < group_2.children.length; i++) {
                group_2.remove(group_2.children[i])
            }
            group_2.add(cube);
            break;
        default:
            a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
            clickCanvas = 0;
            break;

    }
    render();

}

function isRoot(euler) {

    // var deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(euler);
    var deltaRotationQuaternion = euler;
    // group.quaternion.multiplyQuaternions(group.quaternion,euler);
    // group_1.quaternion.multiplyQuaternions(group_1.quaternion,euler);
    // group_2.setRotationFromQuaternion(group.children[7].getWorldQuaternion(new THREE.Quaternion()));
    group.setRotationFromQuaternion(euler);
    group_1.setRotationFromQuaternion(euler);
    group_2.setRotationFromQuaternion(euler);
    // group.applyQuaternion(euler);
    // group_1.applyQuaternion(euler);
    // var quq= new THREE.Quaternion().setFromEuler(new THREE.Euler(toRadians(90),0,0,"XYZ"));

    // for(var rec = 0; rec<group_2.children.length;rec++){
    //     group_2.children[rec].quaternion.multiplyQuaternions(quq,group_2.children[rec].quaternion);
    // }

    // group_2.setRotationFromQuaternion(euler);
    // group_2.quaternion.setFromAxisAngle(new THREE.Vector3(1,0,0),toRadians(-90));
    // console.log(group.quaternion.multiplyQuaternions(euler,group.quaternion));

}


function box_1(u, v, w, dir, width, height, depth, widthSegment, heightSegment, depthSegment, materialIndex = 0x00cc00) {
    var material = new THREE.MeshPhongMaterial({
        color: materialIndex
    });
    var geometry = new THREE.Geometry();
    var segW = width / widthSegment;
    var segH = height / heightSegment;
    var segD = depth / depthSegment;
    var gridX1 = widthSegment + 1;
    var gridY1 = heightSegment + 1;
    var gridZ1 = depthSegment + 1;
    var veritesCount = 0;
    var planeCount = 0;
    var xi, yi, zi;
    var vec = new THREE.Vector3();
    for (yi = 0; yi < gridY1; yi++) {
        y = yi * segH;
        for (xi = 0; xi < gridX1; xi++) {
            x = xi * segW;
            /* for(zi=0;zi<gridZ1;zi++){
             z=zi*segD;*/
            vec[u] = x * dir;
            vec[v] = y * dir;
            vec[w] = depth;
            geometry.vertices.push(new THREE.Vector3(vec.x, vec.y, vec.z));
            veritesCount += 1;
            // }
        }
    }
    var numberFace = 0,
        numberTr = 0;
    for (yi = 0; yi < heightSegment; yi++) {
        for (xi = 0; xi < widthSegment; xi++) {
            var a = numberFace + yi;
            numberTr += 1;
            var b = numberFace + numberTr + yi;
            numberTr += 1;
            var c = numberFace + numberTr + yi + widthSegment - 1;
            numberTr += 1;
            var d = numberFace + numberTr + yi + widthSegment - 1;
            numberTr += 1;
            geometry.faces.push(new THREE.Face3(a, b, d));
            geometry.faces.push(new THREE.Face3(a, d, c));

            numberFace += 1;
            numberTr = 0;;
        }
    }
    group_2.add(new THREE.Mesh(geometry, material));
    objects.push(new THREE.Mesh(geometry, material));
}



var lastFrameTime = new Date().getTime() / 1000;
var totalGameTime = 0;



function render() {


    renderer.render(scene, camera);
}

function raycasterClik() {
    camera.lookAt(scene.position);
    camera.updateMatrixWorld();
    raycaster.setFromCamera(mouse, camera);
    raycaster.linePrecision = 3;
    var intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0) {
        toRotate(intersects, block);
        document.getElementById("pLine").innerHTML = 'Objekt o nazwie: ' + intersects[0].object.name;
        document.getElementById("pLine").style.color = "red";
    }else{
        document.getElementById("pLine").innerHTML = "Brak zaznaczonych obiektow."+mouse.x;
        document.getElementById("pLine").style.color = "black";
    }
}

function raycasterMove() {
    
    camera.lookAt(scene.position);
    camera.updateMatrixWorld();
    raycaster.setFromCamera(mouse, camera);
    raycaster.linePrecision = 3;
    var intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0) {

        document.getElementById("pLine").innerHTML = 'Objekt o nazwie: ' + intersects[0].object.name;
        document.getElementById("pLine").style.color = "red";
        // document.onKeyDown = function (e) {
        //     if (e.which == 46) {
        //         group_2.remove(intersects[0].object);
        //         objects.splice(7, objects.length);
        //         for (var i = 0; i < group_2.children.length; i++) {
        //             if (group_2.children[i] != objects[i + 7]) {
        //                 objects.push(group_2.children[i]);
        //             };
        //         };
        //     };
        // };



    } else {
        document.getElementById("pLine").innerHTML = "Brak zaznaczonych obiektow.";
        document.getElementById("pLine").style.color = "black";
    }
    // render();
    
}

function animate() {
    window.requestAnimationFrame(animate);
    render();
}
animate();


function toRotate(intersects, block) {
    var qua = new THREE.Quaternion();
    if (intersects[0].object.name == 'front' && block == false ||
        intersects[0].object.name == 'plane6' && block == false) {
        qua.setFromEuler(new THREE.Euler(0, 0, 0));
        if (group_1.quaternion != qua) {
            group_2.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group_1.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            // isRoot(qua);


        }

    }
    if (intersects[0].object.name == 'right' && block == false) {
        qua.setFromEuler(new THREE.Euler(0, -Math.PI / 2, 0));
        if (group_1.quaternion != qua) {
            group_2.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group_1.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group.quaternion.set(qua._x, qua._y, qua._z, qua._w);
        }
    }
    if (intersects[0].object.name == 'back' && block == false) {
        qua.setFromEuler(new THREE.Euler(0, Math.PI, 0));
        if (group_1.quaternion != qua) {
            group_2.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group_1.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group.quaternion.set(qua._x, qua._y, qua._z, qua._w);
        }
    }
    if (intersects[0].object.name == 'left' && block == false ||
        intersects[0].object.name == 'plane7' && block == false) {
        qua.setFromEuler(new THREE.Euler(0, Math.PI / 2, 0));
        if (group_1.quaternion != qua) {
            group_2.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group_1.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group.quaternion.set(qua._x, qua._y, qua._z, qua._w);

        }
    }
    if (intersects[0].object.name == 'top' && block == false ||
        intersects[0].object.name == 'plane8' && block == false) {
        qua.setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0));
        if (group_1.quaternion != qua) {
            group_2.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group_1.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            // isRoot(qua);
        }
    }
    if (intersects[0].object.name == 'bottom' && block == false) {
        qua.setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
        if (group_1.quaternion != qua) {
            group_2.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group_1.quaternion.set(qua._x, qua._y, qua._z, qua._w);
            group.quaternion.set(qua._x, qua._y, qua._z, qua._w);
        }
    }

}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}
$(function () {
    var date = new Date();
    $('#pFooter').html('\251 ' + date.getFullYear() + ' by EmSoft wszelkie prawa zastrzezone <br/><a href="http://www.emsoft.net.pl"><span style="color:#3016dd;"> www.emsoft.net.pl</span></a> <h4 style="color:red"> Strona w przygotowaniu</h4>');
});
$('#text1').val('Zablokuj płaszczyżnę do kreślenia');





