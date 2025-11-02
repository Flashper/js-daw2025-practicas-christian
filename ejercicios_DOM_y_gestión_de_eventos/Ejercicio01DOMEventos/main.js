const btnNewNumber = document.getElementById("btn-newNumber");

btnNewNumber.addEventListener("click", () => NewRow());

const NewRow = () => {
    const ulist = document.getElementById("ulist");
    const newli = document.createElement("li");

    let randomNumber = Math.floor(Math.random()*100);

    newli.textContent = randomNumber;

    ulist.appendChild(newli);
}