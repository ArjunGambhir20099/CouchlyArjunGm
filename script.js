function categorySlider() {
    var x = document.getElementById("myCategories");
    if (x.className === "categories") {
      x.className += " responsive";
    } else {
      x.className = "categories";
    }
  }

  function locationSlider() {
    var x = document.getElementById("myLocations");
    if (x.className === "locations") {
      x.className += " responsive";
    } else {
      x.className = "locations";
    }
  }

  function search_brand() {
    //alert('welcome');
    var a=document.getElementById('searchbar').value;
    a=a.toLowerCase();
    //alert(a)
    let x = document.getElementsByClassName('product-card');
        
      for (i = 0; i < x.length; i++) { 
          if (!x[i].innerHTML.toLowerCase().includes(a)) {
              x[i].style.display="none";
          }
          else {
              x[i].style.display="list-item";                 
          }
      }
  }
  

function openCity(evt, furniture) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(furniture).style.display = "block";
    evt.currentTarget.className += " active";
  }



function openLocation(evt, location) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("loccontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("loclinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(location).style.display = "block";
    evt.currentTarget.className += " active";
  }


  function openSign(evt, signin) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("sigcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("siglinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(signin).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function logged()
  {
    alert('login successful');
    window.location.href="index.html";
  }