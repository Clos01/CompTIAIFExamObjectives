//Function = start function

//loadHTML = function name

//() function declaration

// function loadHTML(nameOfID, nameOfHTMLID) {} putting it all together

//nameOfID, nameOfHTMLID =  Parameters: can be any name but better to know what the purpose is so name it that

function loadComponent(componentName, targetId) {
  //Using the Fetch API:

  fetch("/Sections/" + componentName + ".html")
    //Handling the Response:
    .then((response) => {
      if (!response.ok) {
        //? checks if the HTTP status is not in the range 200-299.
        throw new Error(
          `Failed to fetch ${componentName}: ${response.statusText}`
        ); //! response.text() converts the response body to plain text (the HTML content).
      }
      return response.text();
    })
    .then((data) => {
      // .then(data => { ... }) receives the HTML content and inserts it into the specified element.
      document.getElementById(targetId).innerHTML += data; //  finds the element by id and sets its inner HTML to the fetched content. Carlos -> Finds the element in html associated with the ID  then whatever is in the will get fetched
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("data_as_assets", "data_as_assets_Id");
  loadComponent("data_security", "data_security_Id");
  loadComponent("intellectual_property", "intellectual_property_Id");
});
  // Function to set the href of the anchor link and simulate a click
  function goToPage(pageName) {
    const link = document.getElementById("dynamicLink");
    link.href = `/pages/${pageName}.html`; // Set the href dynamically
    link.click(); // Simulate a click on the link
}

// Event listener for the button
document.getElementById("nxt-btn-Id").addEventListener("click", function() {
    goToPage("NetworkingConcepts"); // Replace "page2" with your target page name
});