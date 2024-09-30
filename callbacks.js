var lname;


function fetchData(name, callback) {

  console.log("name: " + name);

  setTimeout(() => {
    lname = callback();
  }, 2000); // Simulate a 2-second delay

  
  console.log('Data fetched!');
  console.log(lname);
}

function processData() {
  console.log('Processing data...');
  return "Raza";
}

fetchData("Ahmad", processData);