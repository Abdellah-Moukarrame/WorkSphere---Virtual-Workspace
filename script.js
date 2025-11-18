workers=[];
///////////Close - Display modal function
const modal = document.querySelector(".modal");
const blureddiv = document.querySelector(".bg-blur");
function Closemodal() {
  modal.classList.add("invisible");
  blureddiv.classList.add("invisible");
}
function Displaymodal() {
  modal.classList.remove("invisible");

  blureddiv.classList.remove("invisible");
}
