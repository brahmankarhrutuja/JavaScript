let a = prompt("Hey whats your age?");
a = Number.parseInt(a)
if (a>0){
  alert("This is a valid age");
}


// if else ----
let b = prompt("Hey whats your age?")
b = Number.parseInt(b)
if (b>0){
  alert("This is a valid age")
}
else {
  alert("This is an invalid age")
}

// if else if ----
if (age<0){
  alert("This is an invalid age");
}
else if (age<9){
  alert("You are a kid and you cannot even think of driving");
}
else if (age<18 && age>=9){
  alert("You are a kid and you can think of driving after 18");
}
  