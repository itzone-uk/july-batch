let person = {
  name: "Sultan",
  age: 30,
  address: {
    street: "Gorment Bakery, Batala Colony",
    city: "Faisalabad",
    state: "Punjab",
    zip: "38000",
    country: "Pakistan"
  }

}
// console.log(person);


person.fatherName = "Waseem";

// console.log(person)

delete person.address;

// console.log(person)





// let newObj = JSON.parse(JSON.stringify(obj));

let carddata = {
  title: "Portfolio",
  content: "This is a portfolio of my work",
  author: "Sultan",
  date: new Date(),
  tags: ["web design", "development", "portfolio"],
  comments: [
    {
      name: "John Doe",
      comment: "This is a great portfolio!"
    },
    {
      name: "Jane Smith",
      comment: "I agree with John!"
    }
  ],
  buttoncontent : "Content is Changed"
}





function changeTheContent () {
  // const card = document.getElementsByClassName('card');
  // console.log(card)

  document.getElementById("cardtitle").innerHTML = carddata.title;
  document.getElementById("cardpara").innerHTML = carddata.content;
  document.getElementById("cardbtn").innerHTML = carddata.buttoncontent;
}



let dest = {
  firstname: "John",
  lastname: "Doe"
}

const age1 = 30;

const {firstname, lastname} = dest;

const dest2 = {firstname, lastname, age:age1}

console.log(dest2)

// let firstname = dest.firstname;


// let lastname = dest.lastname;

console.log(firstname, lastname)


// concept of this keyword
// concept of storing functions in objects