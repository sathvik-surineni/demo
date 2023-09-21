function redirectToPage() {
    // Get the values from the two search bars
    var searchValue1 = document.getElementById("searchInput1").value;
    var searchValue2 = document.getElementById("searchInput2").value;

    // Check if both search values are not empty
    if (searchValue1.trim()== "") {
        alert("Please enter values in both search bars.");
    } 
    else if(searchValue1.trim()!== "" && searchValue2.trim()== "")
    {
        var redirectURL = searchValue1+ ".html"; // Modify as needed

        // Redirect to the specified page
        window.location.href = redirectURL;  
    }
    else if(searchValue1.trim()!== "" && searchValue2.trim()!== ""){
        var redirectURL = searchValue1+ searchValue2 + ".html"; // Modify as needed

        // Redirect to the specified page
        window.location.href = redirectURL;
    }
    else {
        alert("Please enter values in both search bars.");
    }
}




 // Construct the URL for redirection based on the values
 var redirectURL = searchValue1+ searchValue2 + ".html"; // Modify as needed

 // Redirect to the specified page
 window.location.href = redirectURL;