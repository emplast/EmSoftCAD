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
    
    var euler = new THREE.Euler(-eulerBlock._x,-eulerBlock._y,-eulerBlock._z, "ZYX");
    switch (clickCanvas) {
      case 0:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);
        // a[1].applyEuler(euler);
        break;
      default:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);

        // a[1].applyEuler(euler);
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
  } else {

    
    var euler = new THREE.Euler(-eulerBlock._x,-eulerBlock._y,-eulerBlock._z, "ZYX");
    switch (clickCanvas) {

      case 1:

        a[3] = new THREE.Vector3(mouse.x, mouse.y, 0);
        // a[3].applyEuler(euler);
        a[2] = new THREE.Vector3(a[1].x, a[3].y, 0);
        a[4] = new THREE.Vector3(a[3].x, a[1].y, 0);
        a[5] = new THREE.Vector3(a[1].x, a[1].y, 0);
        geometry.vertices.push(a[1], a[2], a[3], a[4], a[5]);
        var box = new THREE.Line(geometry, material);
        box.setRotationFromEuler(euler);
        // box.rotateZ(group_1.rotation._z);
        // box.rotateY(group_1.rotation._y);
        // box.rotateX(group_1.rotation._x);
        for (var i = 0 + g_2El; i < group_2.children.length; i++) {
          group_2.remove(group_2.children[i])
        }
        group_2.add(box);
        break;
      default:
        a[1] = new THREE.Vector3(mouse.x, mouse.y, 0);

        // a[1].applyEuler(euler);
        clickCanvas = 0;
        break;
    }
  }
  render();
}