let workers = JSON.parse(localStorage.getItem("worker")) || [];
///////////Close - Display modal function
const modal = document.querySelector(".modal");
const blureddiv = document.querySelector(".bg-blur");
const details = document.querySelector(".details-modal");
const edit = document.querySelector(".edit-modal");
const zonemodal = document.querySelector(".zone-modal");
function Closemodal() {
  modal.classList.add("invisible");
  blureddiv.classList.add("invisible");
  details.classList.add("invisible");
  edit.classList.add("invisible");
  zonemodal.classList.add("invisible");
}
function Displaymodal() {
  modal.classList.remove("invisible");
  blureddiv.classList.remove("invisible");
}

let Datapersonnel;
let experiences = [];

/////////// Experience
const experiencediv = document.querySelector("#experience");
const btnajouterexperience = document.querySelector("#ajouter-experience");
btnajouterexperience.addEventListener("click", () => {
  experiencediv.innerHTML += `
    <div class="exp-block" style="margin-bottom:10px;">
      <input type="text" class="exp-company" placeholder="Nom de entreprise" required>
      <input type="date" class="exp-start" placeholder="Date de début" required>
      <input type="date" class="exp-end" placeholder="Date de fin" required>
      <button type="button" class="supprimer-exp">Supprimer</button>
    </div>
  `;

  const supprimerexp = experiencediv.querySelectorAll(".supprimer-exp");
  supprimerexp.forEach((btn) => {
    btn.onclick = () => {
      btn.parentElement.remove();
    };
  });
});

///////////// Form

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
    personnel_experience: experiences,
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
  workers.forEach((worker, index) => {
    personnel.innerHTML += `
    <div class='div'>
        <img src=${worker.personnel_image}>
        <h3>${worker.personnel_nom}</h3>
        <h3><bold>${worker.personnel_role}</bold></h3>
        <button onclick="deletepersonnel(${index})"><img alt='delete' src='/img/delete.png'</button>
        <button onclick="editpersonnel(${index})"><img alt='edit' src='/img/edit.png'</button>
        <button onclick="detailspersonnel(${index})"><img alt='details' src='/img/details.png'</button>
    </div>
    `;
  });
  localStorage.setItem("worker", JSON.stringify(workers));
}

ajouter();

////////////// delete personnel
function deletepersonnel(index) {
  workers.splice(index, 1);
  localStorage.setItem("worker", JSON.stringify(workers));
  ajouter();
}

//////////// details de personnel

function detailspersonnel(index) {
  details.classList.remove("invisible");
  blureddiv.classList.remove("invisible");
  details.innerHTML = `
  <button onclick="Closemodal()" class="close-modal" type="button">
        &#x274C;
  </button>
  <h2> Details de personnels : </h2> <br>
  <h3> Nom:${workers[index].personnel_nom} </h3> <br>
  <img alt='profile' src=${workers[index].personnel_image} > <br>
  <h3>Role:${workers[index].personnel_role}</h3> <br>
  <h3>Telephone:${workers[index].personnel_tel}</h3> <br>
  <h3>Email:${workers[index].personnel_email}</h3> <br>

  `;
}
//////////////  Edit personnel
function editpersonnel(index) {
  edit.classList.remove("invisible");
  blureddiv.classList.remove("invisible");

  edit.innerHTML = `
    <button onclick="Closemodal()" class="close-modal" type="button">
        &#x274C;
    </button>
    <form class='' onsubmit="enregistrermodif(${index}); return false;">
        <h2>Edit Formulaire</h2>
        <br />
        <label>Modifier le Nom:</label> <br />
        <input type="text" class="nom" value="${
          workers[index].personnel_nom
        }" />

        <label>Modifier l'url d'image</label><br />
        <input type="text" class="image" value="${
          workers[index].personnel_image
        }" />

        <label>Modifier le Telephone:</label> <br />
        <input type="tel" class="telphone" value="${
          workers[index].personnel_tel
        }" />

        <label>Modifier le email</label> <br />
        <input type="email" class="email" value="${
          workers[index].personnel_email
        }" />

        <label>Modifier le Role:</label><br />
        <select id="select-role">
          <option value="IT" ${
            workers[index].personnel_role === "IT" ? "selected" : ""
          }>IT</option>
          <option value="Security" ${
            workers[index].personnel_role === "Security" ? "selected" : ""
          }>Security</option>
          <option value="Reception" ${
            workers[index].personnel_role === "Reception" ? "selected" : ""
          }>Reception</option>
          <option value="Cleaning" ${
            workers[index].personnel_role === "Cleaning" ? "selected" : ""
          }>Cleaning</option>
          <option value="Manager" ${
            workers[index].personnel_role === "Manager" ? "selected" : ""
          }>Manager</option>
          <option value="Autres" ${
            workers[index].personnel_role === "Autres" ? "selected" : ""
          }>Autres</option>
        </select>

        <input type="submit" value="Enregistrer" />
    </form>
  `;
}

function enregistrermodif(index) {
  workers[index].personnel_nom = document.querySelector(".nom").value.trim();
  workers[index].personnel_tel = document
    .querySelector(".telphone")
    .value.trim();
  workers[index].personnel_image = document
    .querySelector(".image")
    .value.trim();
  workers[index].personnel_email = document
    .querySelector(".email")
    .value.trim();
  workers[index].personnel_role = document
    .querySelector("#select-role")
    .value.trim();
  ajouter();
}

