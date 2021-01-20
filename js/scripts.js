
function count(goal, multiple){
  let array = [];
  for(let i= multiple; i<=goal; i+=multiple)
  {
    array.push(i);
  }
  return array;
}

$(document).ready(function()
{
  
  $("#formInput").submit(function(event){
    event.preventDefault();
    
    const goal = parseInt($("#goal").val());
    const multiple = parseInt($("#multiple").val());
    
    if(isNaN(goal) || isNaN(multiple))
    {
      alert("Not a number. Please enter numbers.");
    }

    if((goal<0 && multiple >0) || (goal>0 && multiple <0))
    {
      alert("Impossible (negative goal or negative multiple detected.) Please correct.");
      return false;
    }

    if(multiple>goal)
    {
      alert("Impossible (Multiple is greater than goal). Please correct.")
    }
    
    else{
      $("#output").text(count(goal, multiple));
    }

  });
});
