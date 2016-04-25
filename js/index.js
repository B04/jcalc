var currentTotal = "0";
var number1 = 0;
var operator = "";

$(document).ready(function() {
  $("#screen").html(currentTotal)
})

var reset = function() {
  currentTotal = "0";
  number1 = 0;
  operator = "";
  $("#screen").html(currentTotal);
}

$('.btn').click(function() {
  
  if ($(this).hasClass('number')) {
    if (currentTotal !== "0") {
      var temp = $(this).text();
      console.log(temp);
      currentTotal += temp;
      $("#screen").html(currentTotal);
    } else {
      var temp = $(this).text();
      console.log(temp);
      currentTotal = temp;
      $("#screen").html(currentTotal);
    }
  } else if ($(this).hasClass('reset')) {
    reset();
  } else if ($(this).hasClass('operator')) {
    if ($(this).hasClass('divide')) {
      number1 = parseInt(currentTotal);
      $("#screen").html("0");
      currentTotal = "0";
      operator = "divide";
    }
    else if ($(this).hasClass('multiply')) {
      number1 = parseInt(currentTotal);
      $("#screen").html("0");
      currentTotal = "0";
      operator = "multiply";
    }
    else if ($(this).hasClass('add')) {
      number1 = parseInt(currentTotal);
      $("#screen").html("0");
      currentTotal = "0";
      operator = "add";
    }
    else if ($(this).hasClass('subtract')) {
      number1 = parseInt(currentTotal);
      $("#screen").html("0");
      currentTotal = "0";
      operator = "subtract";
    }
    else if ($(this).hasClass('equals')) {
      switch (operator) {
        case "divide":
          currentTotal = number1 / parseInt(currentTotal);
          $("#screen").html(currentTotal);
          break;
        case "multiply":
          currentTotal = number1 * parseInt(currentTotal);
          $("#screen").html(currentTotal);
          break;
        case "add":
          currentTotal = number1 + parseInt(currentTotal);
          $("#screen").html(currentTotal);
          break;
        case "subtract":
          currentTotal = number1 - parseInt(currentTotal);
          $("#screen").html(currentTotal);
          break;
        default:
          $("#screen").html("#ERROR");
          currentTotal = "0"
          break;
      }
    }
  }
})