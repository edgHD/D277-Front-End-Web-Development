// Fetch and load the header HTML
fetch('/assets/header.html') // Request the header HTML file
  .then(response => response.text()) // Convert the response to text
  .then(data => {
    // Insert the fetched HTML into the 'main-header' element
    document.getElementById('main-header').innerHTML = data;
  });

// Fetch and load the nav HTML
fetch('/assets/nav.html') // Request the nav HTML file
  .then(response => response.text()) // Convert the response to text
  .then(data => {
    // Insert the fetched HTML into the 'main-nav' element
    document.getElementById('main-nav').innerHTML = data;
  });

// Fetch and load the footer HTML
fetch('/assets/footer.html') // Request the footer HTML file
.then(response => response.text()) // Convert the response to text
.then(data => {
  // Insert the fetched HTML into the 'main-footer' element
  document.getElementById('main-footer').innerHTML = data;
});