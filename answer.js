// Answer 1
function describeValue(value) {
  return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}
// console.log(describeValue("Talha"));


// Answer 2
function getDayType(day){
  if(day == "Friday" || day === "Saturday"){
    return "Weekend";
  }else if(
    day === "Sunday" ||
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday"
  ){
    return "working Day";
  }else{
    return "Invalid Day";
  }
}
// console.log(getDayType("Friday"));


// Answer 3
function validateUsername(username){
  if (username.length < 4){
    return "Too Short";
  } else if(username.includes(" ")){
    return "No Space Allowed";
  }else if(username.toLowerCase().includes("admin")){
    return "Reserved word";
  } else {
    return "Available";
  }
}
// console.log(validateUsername("abutalhaAdmin"));


// Answer 4
function getCngFare(distance, isNight = false, waitingMinuts = 0){
  let fare = 50;
  if(distance > 2){
    fare += (distance -2)*15;
  }
  fare += waitingMinuts * 2;

  if(isNight){
    fare = fare*1.2;
  }
  return fare;
}
// console.log(getCngFare(5, false, 10));


