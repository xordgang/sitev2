window.onload = function() 
{
  document.body.addEventListener("mousemove", function(event)
  {
		var fare = document.getElementById("fare");

        //TODO: More consistent way of aligning the cursor without awkward offsets?
        var x = event.pageX - (fare.offsetWidth / 14) + 'px';
        var y = event.pageY - (fare.offsetHeight / 14) + 'px';

        fare.style.left = x;
        fare.style.top = y;
  });
}