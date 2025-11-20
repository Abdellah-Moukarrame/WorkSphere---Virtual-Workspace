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
  workers.forEach((worker, index) => {
    personnel.innerHTML += `
    <div class='div'>
        <img src=${worker.personnel_image}>
        <h3>${worker.personnel_nom}</h3>
        <h3><bold>${worker.personnel_role}</bold></h3>
        <button onclick="deletepersonnel(${index})"><img src='/img/delete.png'</button>
        <button onclick="editpersonnel(${index})"><img src='/img/edit.png'</button>
        <button onclick="detailspersonnel(${index})"><img src='/img/details.png'</button>
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
  <img src=${workers[index].personnel_image} > <br>
  <h3>Role:${workers[index].personnel_role}</h3> <br>
  <h3>Telephone:${workers[index].personnel_tel}</h3> <br>
  <h3>Email:${workers[index].personnel_email}</h3> <br>

  `;
}
//////////////  Edit personnel
function editpersonnel() {
  edit.classList.remove("invisible");
  blureddiv.classList.remove("invisible");
  workers.foreach((worker, index) => {
    edit.innerHTML = `
  <button onclick="Closemodal()" class="close-modal" type="button">
        &#x274C;
  </button>
  <form class='modal'>
        <h2>Formulaire</h2>
        <br />
        <label>Modifier le Nom:</label> <br />
        <input
          type="text"
          id=""
          class="nom"
          value="${worker.personnel_nom} "
          placeholder="entrer nom personnel"
        /><br />
        <label>Modifier l'url d'image</label><br />
        <input
          type="text"
          name=""
          id=""
          value="${worker.personnel_image} "
          class="image"
          placeholder="entrer l'url d'image"
        /><br />
        <label>Modifier le Telephone:</label> <br />
        <input
          type="tel"
          id=""
          value="${worker.personnel_tel} "
          class="telphone"
          placeholder="entrer tel personnel"
        /><br />
        <label>Modifier le email</label> <br />
        <input
          type="email"
          placeholder="entrer email personel"
          value="${worker.personnel_email} "
          class="email"
        /><br />
        <label>Modifier le Role:</label><br />
        <select id="select-role" name="Role" id="">
          <option value="IT" ${
            worker.personnel_role == "IT" ? "selected" : ""
          }>IT</option>
          <option value="Security" ${
            worker.personnel_role == "Security" ? "selected" : ""
          }>Security</option>
          <option value="Reception" ${
            worker.personnel_role == "Reception" ? "selected" : ""
          }>Reception</option>
          <option value="Cleaning" ${
            worker.personnel_role == "Cleaning" ? "selected" : ""
          }>Cleaning</option>
          <option value="Manager" ${
            worker.personnel_role == "Manager" ? "selected" : ""
          }>Manager</option>
          <option value="Autres" ${
            worker.personnel_role == "Autres" ? "selected" : ""
          }>Autres</option>
        </select>

        <input type="submit" value="Enregestrer(${index})" />
  </form>
 `;
  });
}

