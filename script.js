function ageCalcuator(year, month, day) {
  //make a funtion
  let current = new Date(); // assign a variable to  current date and time
  let birthdate = new Date(year, month - 1, day); // assign a variable to costume date and time given by input
  let yeardiff = current.getFullYear() - birthdate.getFullYear(); // assign a variable to get difference between current year and and birthday year
  let monthdiff = current.getMonth() - birthdate.getMonth(); // assign a variable to get difference between current month and and birthday month
  let datediff = birthdate.getDate() - current.getDate(); // assign a variable to get difference between current date and and birthday date
  let remaininghours = current.getHours(); //assign a variable to get the current hours from the date
  let remainingminutes = current.getMinutes(); //assign a variable to get the current minutes from the date
  let remainingseconds = current.getSeconds(); //assign a variable to get the current seconds from the date

  if (monthdiff < 0 || monthdiff == 0) {
    yeardiff--;
    monthdiff += 12;
  }
  //make a condition in which is themonthdifference is less then 0 or equal to 0
  //so decrement the value of yeardifference or subtrat 1 from yeardiffernce it
  //also asign that there are 12 months in a year

  if (datediff < 0) {
    monthdiff--;
    let prevMonth = new Date(current.getFullYear(), current.getMonth(), 0);
    datediff += prevMonth.getDate();
  }
  //make a condidtion in which if the date difference is less then 0 so decrement
  //the value of monthdifference or subtratct the monthdifference with 1 it also
  //assign the date according to months



  return {
    years: yeardiff,
    months: monthdiff,
    days: datediff,
    hours: remaininghours,
    minutes: remainingminutes,
    seconds: remainingseconds,
  };
  //return the value of yeardifference, monthdifference, datedifference,
  //hours, minutes, seconds.
}

function todisplay() {

  //the function that take the value as an input from the assigned variable inputofyears, inputofmonths , inputofdates
  let inputofyear = parseInt(document.getElementById("inputyears").value);
  let inputofmonth = parseInt(document.getElementById("inputMonths").value);
  let inputofdate = parseInt(document.getElementById("inputdays").value);
  let display = ageCalcuator(inputofyear, inputofmonth, inputofdate); //it call the funtion to active on when it assign to the othervariable

  // all these lines of codes shows the output of the year ,month, days, hours, minutes, seconds.
  document.getElementById("outputyears").innerText = display.years;
  document.getElementById("outputmonths").innerText = display.months;
  document.getElementById("outputdays").innerText = display.days;
  document.getElementById("outputhours").innerText = display.hours;
  document.getElementById("outputminutes").innerText = display.minutes;
  document.getElementById("outputsecond").innerText = display.seconds;

}

