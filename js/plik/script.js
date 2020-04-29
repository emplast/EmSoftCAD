


function kwadrat(e) {

  mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
  mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;
  if (!x) {
    switch (clickCanvas) {
      case 0:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        break;
      default:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        break;
    }

  } else {

    var euler = euler0();

    switch (clickCanvas) {
      case 0:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        a[1].applyEuler(euler);
        console.log(a[1]);
        break;
      case 1:
        // console.log("EULER: ");
        // console.log(euler);
        break;
      default:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        a[1].applyEuler(euler);
        break;
    }

  }

  clickCanvas++;
  objects.splice(7 + g_2El, objects.length);
  for (var i = 0 + g_2El; i < group_2.children.length; i++) {
    objects.push(group_2.children[i]);
  }
  g_2El = group_2.children.length;
}

function kwadratM(e) {

  mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
  mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

  var material = new THREE.LineBasicMaterial({
    color: 0x050505
  });
  var geometry = new THREE.Geometry();
  if (!x) {
    switch (clickCanvas) {

      case 1:
        a[3] = new THREE.Vector3(mouse.x, mouse.y, 0);
        a[2] = new THREE.Vector3(a[1].x, a[3].y, 0);
        a[4] = new THREE.Vector3(a[3].x, a[1].y, 0);
        a[5] = new THREE.Vector3(a[1].x, a[1].y, 0);
        geometry.vertices.push(a[1], a[2], a[3], a[4], a[5]);
        var box = new THREE.Line(geometry, material);
        box.setRotationFromEuler(new THREE.Euler(-group_1.rotation._x, -group_1.rotation._y, -group_1.rotation._z, "ZYX"));
        // box.rotateZ(-group_1.rotation._z);
        // box.rotateY(-group_1.rotation._y);
        // box.rotateX(-group_1.rotation._x);
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
  } else {

    // var euler = new THREE.Euler(eulerBlock._x,eulerBlock._y,eulerBlock._z, "ZYX");
    // var euler = euler0();
    var euler = euler0();
    switch (clickCanvas) {

      case 1:

        a[3] = new THREE.Vector3(mouse.x, mouse.y, 0);
        a[3].applyEuler(euler);
        a[2] = new THREE.Vector3(a[1].x, a[3].y, 0);
        // 
        a[4] = new THREE.Vector3(a[3].x, a[1].y, 0);
        // 
        a[5] = new THREE.Vector3(a[1].x, a[1].y, 0);

        // a[1].applyEuler(euler);
        // a[2].applyEuler(euler);

        // a[4].applyEuler(euler);
        // a[5].applyEuler(euler);


        geometry.vertices.push(a[1], a[2], a[3], a[4], a[5]);
        var box = new THREE.Line(geometry, material);
        // box.setRotationFromEuler(euler);
        // box.rotateZ(-eulerBlock._z);
        // box.rotateY(-eulerBlock._y);
        // box.rotateX(-eulerBlock._x);
        // box.quaternion.setFromEuler(euler);
        for (var i = 0 + g_2El; i < group_2.children.length; i++) {
          group_2.remove(group_2.children[i])
        }
        group_2.add(box);
        break;
      default:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        a[1].applyEuler(euler);
        clickCanvas = 0;
        break;
    }
  }
  render();
}


/*
*
*------------------------------------------------ EULER -----------------------------------------------------------------------------
*
*
*/


function euler0() {

  // var e=  new THREE.Euler(Math.PI*2-group_1.rotation._x+eulerBlock._x+toRadians(30),Math.PI*2-group_1.rotation._y+eulerBlock._y+toRadians(-30),Math.PI*2-group_1.rotation._z+eulerBlock._z,"ZYX");
  // var e = new THREE.Euler(-eulerBlock._x+group_1.rotation._x,-eulerBlock._y+group_1.rotation._y,-eulerBlock._z+group_1.rotation._z, "ZYX");
  var e = new THREE.Euler(
    -group_1.rotation._x,
    -group_1.rotation._y,
    -group_1.rotation._z, "ZYX");
  // var e = eulerBlock;
  // var e= new THREE.Euler(eulerBlock._x,eulerBlock._y,eulerBlock._z,"ZYX")
  return e;
}
function euler1() {

  var e = new THREE.Euler(-group_2.rotation._x, -group_2.rotation._y, -group_2.rotation._z, "ZYX");
  return e;
}

function euler2() {

  var e = new THREE.Euler(-group_2.rotation._x - eulerBlock._x, -group_2.rotation._y - eulerBlock._y, -group_2.rotation._z - eulerBlock._z, "ZYX");
  return e;
}

/*
*
*
*    ----------------------------------------------OKREG ---------------------------------------------------------------------
*
*
*
*/




function okreg(e) {

  mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
  mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

  if (!x) {


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



  } else {

    var euler = euler0();
    switch (clickCanvas) {
      case 0:
        pozycja[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        pozycja[1].applyEuler(euler);
        break;
      default:
        pozycja[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        pozycja[1].applyEuler(euler);
        break;
    }
  }
  clickCanvas++;
  objects.splice(7 + g_2El, objects.length);
  for (var i = 0 + g_2El; i < group_2.children.length; i++) {
    objects.push(group_2.children[i]);
  }
  g_2El = group_2.children.length;
  render();
}

function okregM(e) {

  mouse.x = (e.clientX - document.getElementById("can").width / 2) / scale;
  mouse.y = (-(e.clientY - document.getElementById("can").height / 2)) / scale;

  if (!x) {
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
  } else {


    var euler = euler0();
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
        srednica.applyEuler(euler);
        radius = srednica.distanceTo(pozycja[1]);
        geometry = new THREE.CircleGeometry(radius, segments, 0, (Math.PI * 2).toFixed(2)),
          geometry.vertices.shift();
        circle = new THREE.Line(geometry, material);
        // circle.setRotationFromEuler(euler);
        circle.rotateZ(group_1.rotation._z);
        circle.rotateY(group_1.rotation._y);
        circle.rotateX(group_1.rotation._x);
        circle.position.set(pozycja[1].x, pozycja[1].y, pozycja[1].z);
        for (var i = 0 + g_2El; i < group_2.children.length; i++) {
          group_2.remove(group_2.children[i])
        }
        group_2.add(circle);
        break;
      default:
        p[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        pozycja[1].applyEuler(euler);
        clickCanvas = 0;
        break;
    }

  }
  render();
}