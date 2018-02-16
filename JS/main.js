/*
The name of the game is Run Rick, in which the charcter "Ricky" will run back
and fourth along the bridge he lives under
*/
alert("Run Rick!");

var ricky = document.getElementById("ricky");

var rickyLeft = 0;

var rickyTop = 0;

/* arrow keys are only triggered by onkeydown, not onkeypress

keycodes are:

    left = 37
    up = 38
    right = 39
    down = 40

*/
document.onkeydown = movement;
function movement(e) {

  if (e.keyCode == 39) {

    rickyLeft+= 5;

    ricky.style.left = rickyLeft + 'px';

     }

  else if (e.keyCode == 37) {

     rickyLeft+= -5;

     ricky.style.left = rickyLeft + 'px';

      }
   else if (e.keyCode == 38) {

      rickyTop+= -5;

      ricky.style.top = rickyTop + 'px';

        }
   else if (e.keyCode == 40) {

       rickyTop+= 5;

       ricky.style.top = rickyTop + 'px';

              }
      movement();


}
