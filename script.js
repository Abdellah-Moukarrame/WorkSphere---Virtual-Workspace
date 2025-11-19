let workers = JSON.parse(localStorage.getItem("worker")) || [];
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

/////////////Form
let Datapersonnel;
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = document.querySelector(".nom").value.trim();
  const tel = document.querySelector(".telphone").value.trim();
  const urlimage = document.querySelector(".image").value.trim();
  const email = document.querySelector(".email").value.trim();
  const role = document.querySelector("#select-role").value.trim();
  const regexnom = /^[A-Za-z\s]{2,50}$/i;
  const regextel = /^(\+?\d{1,3})?[ -]?\d{6,14}$/i;
  const regeximage = /^(https?:\/\/[^\s]+)$/i;
  const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  const regexrole = /^(IT|Security|Reception|Cleaning|Manager|Autres)$/i;
  

  ///////// validation form
  if (!regexnom.test(nom)) {
    return alert("le nom est invalid");
  }
  if (!regextel.test(tel)) {
    return alert("le tel est invalid");
  }
  if (!regeximage.test(urlimage)) {
    return alert("le url d'image est invalid");
  }
  if (!regexemail.test(email)) {
    return alert("l'email est invalid");
  }
  if (!regexrole.test(role)) {
    return alert("le role est invalid");
  }

  Datapersonnel = {
    personnel_nom: nom,
    personnel_tel: tel,
    personnel_image: urlimage,
    personnel_email: email,
    personnel_role: role,
  };
  workers.push(Datapersonnel);
  console.log(workers);

  form.reset();
  ajouter();
});
JSON.parse(localStorage.getItem("worker"));
/////////// Render data in dashboard
const personnel = document.querySelector(".personnels-div");
console.log(personnel);
function ajouter() {
  personnel.innerHTML = "";
  workers.forEach((worker,index) => {
    personnel.innerHTML += `
    <div class='div'>
        <img src=${worker.personnel_image}>
        <h3>${worker.personnel_nom}</h3>
        <h3><bold>${worker.personnel_role}</bold></h3>
        <button onclick="deletepersonnel(${index})"><img src='/img/delete.png'</button>
        <button ><img src='/img/edit.png'</button>
        <button onclick="details(${index})" ><img src='/img/details.png'</button>
    </div>
    `;
  });
  localStorage.setItem("worker", JSON.stringify(workers));
}


ajouter();

////////////// delete personnel
function deletepersonnel(index) {
  workers.splice(index,1);
  localStorage.setItem("worker", JSON.stringify(workers));
  ajouter();
}
