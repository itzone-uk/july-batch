// Search splice & split method of string 

let str1 = 'Ahmad "Diary"';
let str4 = "Ahmad's Diary";



let texts = "I love cats. Cats are very easy to love. Cats are very popular."

const iterator = texts.matchAll("Cats");

// console.log(iterator)
// let arr = iterator.split(',')

let numofdiaries = 5;
// when you have to use single and double quotes both in 1 string then you can create stirng in template literals
let str5 = `Ahmad has${numofdiaries}"Diaries"`;

console.log(str5)
let str2 = "Raza";

let fullstr = `${10 + 5} ${str2}`;

console.log(fullstr);
let fullstring = str1 + " " + str2;

// console.log(fullstring)

// Output: Ahmad Raza

let concat = str1.concat(" " , str2);

// console.log(concat);

// Output: Ahmad Raza

// console.log(concat.length)

// Output: 10

// console.log(concat.charAt(4));

let text1 = "     Hello World!     ";


let text2 = text1.trim();

// console.log(text1 + '.');
// console.log(text2 + '.');


let text = "555";
let padded = text.padStart(4,".");

// console.log(padded);

// let replaced = text3.replace("World", "Universe");

// console.log(replaced);



let sliced = "Apple, Banana, Kiwi";
let part = text.slice(7, 13, "Guava");

console.log(sliced);

console.log(part)
console.log(sliced)



let str3 = `mobile`;

let str = `${str3} phone`;

console.log(str);
console.log(str3);

