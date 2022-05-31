const wrap = document.querySelectorAll("i");

wrap.forEach(myFunction);
function myFunction(item, index) {
  item.addEventListener("click", start);

  function start() {
    const top = document.getElementById("top");
    const icons = document.querySelector(".icons");

    switch (index) {
      case 1:
        icons.style.transform = "rotate(360deg)";
        top.style.transform = "translateX(-290px)";
        break;
      case 3:
        icons.style.transform = "rotate(-360deg)";
        top.style.transform = "translateY(290px)";
        break;
      case 2:
        icons.style.transform = "rotate(360deg)";
        top.style.transform = "translateX(290px)";
        break;
      case 0:
        icons.style.transform = "rotate(-360deg)";
        top.style.transform = "translateY(-290px)";
        break;
    }
  }
}
