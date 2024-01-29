let sentence = 'Hello I\'am Hrutuja';
console.log(sentence);

//length ----------->
console.log(sentence.length);

//example2 length ----------->
let word = "Heloo there! How are you?"
console.log(word.length);


//uppercase ---------->
console.log(sentence.toUpperCase());

//uppercase example 2---------->
let sentence1 = 'I\'m fine. What about you'
console.log(sentence1.toUpperCase());

// lower case--------->
console.log(sentence.toLowerCase());

// slice Properties --------->
console.log(sentence.slice(0,16))

//slice example2 --------->
let word1 = "Today is Wednesday"
console.log(word1.length);
console.log(word1.slice(9,18));

//replace ---------->
console.log(sentence.replace("Hrutuja","Hrutu"))

//charAt() ----------->
console.log("-----------CharAt Example------------")
let text = "HELLO WORLD";
let char = text.charAt(9);
console.log(char)

// charAt() example2 --------->
let msg = "happy to meet you"
let char1 = msg.charAt(12);
console.log(char1)

// charCodeAt() --------->
console.log("-----------CharACodet Example------------")
let text2 = "HELLO EVERYONE";
let char2 = text.charCodeAt(0);
console.log(char2)

// charAtCode example2 ----------->
let context = "Yes thats me"
let char3 = context.charCodeAt();
console.log(char3)

//at() ---------->
console.log("-----------At Example------------")
const name = "W3Schools";
let letter = name.at(2);
console.log(letter.at())

// at() example2 -------->
let myName = "Hrutujaaaa"
let oneLetter = myName.at(8);
console.log(oneLetter)
