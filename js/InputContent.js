// Function to load HTML components into specified elements
function loadComponent(componentName, targetId) {
  fetch(`/Sections/${componentName}.html`)
  // ... rest of the code remains the same
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${componentName}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(targetId).innerHTML += data;
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", error);
    });
}


// Function to navigate to another page
function goToPage(pageName) {
  const link = document.getElementById("dynamicLink");
  link.href = `Pages/${pageName}.html`; // Adjusted path
  link.click();
}

// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("data_as_assets", "data_as_assets_Id");
  loadComponent("data_security", "data_security_Id");
  loadComponent("intellectual_property", "intellectual_property_Id");
  loadComponent("networking_Page_Content", "networking_page_Content_ID");

});

// Event listener for the "Next" button
document.getElementById("nxt-btn-Id").addEventListener("click", () => {
  goToPage("Networking_Page_Content");
});

