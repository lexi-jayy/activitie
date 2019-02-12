      google.charts.load('current', {'packages':['corechart']});//loading the core chart, 'current' gets the current working version of "chart", may have to change core chart depending on what chart you are using
      google.charts.setOnLoadCallback(drawChart); //calling a function, if chaning drawchart to etc remember to change the function name
      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string','Activity');
        data.addColumn('number','Hours');
        data.addRows([
          ['hunting people', parseInt(formValues[0].value)],
          ['Eating corpses', parseInt(formValues[1].value)],
          ['traveling',  parseInt(formValues[2].value)],
          ['murdering', parseInt(formValues[3].value)],
          ['Sleep',    parseInt(formValues[4].value)]
        ]);

        var options = {
          'title': 'My "Secret" Activities',
          'width': 400,
          'height': 200
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));// getting the element by id is getting from the html

        chart.draw(data, options); //if change the variable name change the .draw to match, var data needs to be exactly the same or else it wont work
      };

      //button is added a click event listener to trigger a function 
document.getElementById("btn").addEventListener("click", function(){
  
    //on clicking the button the values of the form elements are stored in form Values
  var formValues= document.getElementsByClassName("acthrs");
  
  
  var i,sum=0; //i variable for index in for loop, sum is the accumulator 
  
  for(i = 0; i < 5; i++) { //loop runs from 0 to 4
    
     sum = sum + parseInt(formValues[i].value); //for every value of i, the accumulator is added new value
    

   }
  
   document.getElementById("hours").innerHTML = sum + " hours"; //display the value of sum 

});