let respons_menu_btn = document.getElementById("respons-menu-btn")
let open_sidebar = document.getElementById("menu-script")
let ols = document.getElementsByClassName("ols")


respons_menu_btn.addEventListener("click", function () {
    if (open_sidebar.classList.contains('open-class')) {
 
        open_sidebar.classList.remove('open-class');
        // open_sidebar.style.display = none;
     
      } else {
     
        open_sidebar.classList.add("open-class");
     
      }
})
