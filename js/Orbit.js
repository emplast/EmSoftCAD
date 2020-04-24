/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


            
            var isDragging = false;
            var previousMousePosition = {
                x: 0,
                y: 0
            };
            $(renderer.domElement).on('mousedown', function (e) {
                isDragging = true;
            })
                    .on('mousemove', function (e) {
                        //console.log(e);
                        var deltaMove = {
                            x: e.offsetX - previousMousePosition.x,
                            y: e.offsetY - previousMousePosition.y
                        };

                        if (isDragging) {

                            var deltaRotationQuaternion = new three.Quaternion()
                                    .setFromEuler(new three.Euler(
                                            toRadians(deltaMove.y * 1),
                                            toRadians(deltaMove.x * 1),
                                            0,
                                            'XYZ'
                                            ));

                            group.quaternion.multiplyQuaternions(deltaRotationQuaternion, group.quaternion);
                            group_1.quaternion.multiplyQuaternions(deltaRotationQuaternion, group_1.quaternion);





                        }

                        previousMousePosition = {
                            x: e.offsetX,
                            y: e.offsetY
                        };
                    });
            /* */

            $(document).on('mouseup', function (e) {
                isDragging = false;
            });

            window.requestAnimFrame = (function () {
                return  window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        function (callback) {
                            window.setTimeout(callback, 1000 / 60);
                        };
            })();

            var lastFrameTime = new Date().getTime() / 1000;
            var totalGameTime = 0;
            function update(dt, t) {

                setTimeout(function () {
                    var currTime = new Date().getTime() / 1000;
                    var dt = currTime - (lastFrameTime || currTime);
                    totalGameTime += dt;

                    update(dt, totalGameTime);

                    lastFrameTime = currTime;
                }, 0);


            }

            
            function render() {
               
                renderer.render(scene, camera);

                requestAnimFrame(render);
            }

            render();
            update(0, totalGameTime);
            /*   */

