const fetchData = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve('Data fetched successfully!');
    } else {
      reject('Error fetching data.');
    }
  }, 2000);
});

fetchData
  .then((message) => {
    console.log(message); // Handle success
  })
  .catch((error) => {
    console.error(error); // Handle failure
  });
