function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched!');
    callback();
  }, 2000); // Simulate a 2-second delay
}
function processData() {
  console.log('Processing data...');
}
fetchData(processData);
