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
