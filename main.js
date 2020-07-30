function myFunction(){
  var para= document.getElementsById('para');
  for (var i=0; i<para.lenght; i++){
    para[i].innerHtml= Testimonials;
    para.classList.add("display-6");

  }

    myFunction();
}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementByClassName("navbar.nav");
    li = ul.getElementsByTagName("nav-item");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
