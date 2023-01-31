/*
Dans le fichier js, vous devez ajouter les fonctionnalités suivantes :
Créez un tableau vide :const tasks = [];
*/
const form = document.querySelector(".form");
let ul = document.querySelector(".list-tasks")

form.addEventListener("submit", touchSubmit);

const tasks = [];



/*
Créez une fonction appelée addTask(). Dès que l'utilisateur clique sur le bouton :
puis ajoutez-le au tableau (c'est-à-dire ajoutez le texte de la tâche)
puis ajoutez-le au DOM, sous le formulaire (dans le <div class="listTasks"></div>) .
Chaque nouvelle tâche ajoutée devrait avoir (en commençant de gauche à droite - consultez l'image en haut de la page)
un bouton "X". Utilisez la police géniale pour le bouton "X".
une entrée type="checkbox". L'étiquette de l'entrée est la tâche ajoutée par l'utilisateur.
*/
function touchSubmit(e) {
    e.preventDefault();
    
    // let formData = new FormData(form);
    // console.log("formData:",formData.get("taskbar"));
    // console.log(formData);
    // let taskbar = formData.get("taskbar");
    let taskbar = document.querySelector("input").value;
    // console.log(taskbar);
    
    // vérifier que l'entrée n'est pas vide,
    if (taskbar === "") {
        return;
    } 
    tasks.push(taskbar);  // puis ajoutez-le au tableau (c'est-à-dire ajoutez le texte de la tâche)
    form.reset(); // qui renitialise le formulaire apres envoie de fichier
    showTasks(tasks);

}
/*
Chaque nouvelle tâche ajoutée devrait avoir
 (en commençant de gauche à droite - consultez l'image en haut de la page)


*/

function showTasks(tasks) {
    console.log("tasks",tasks);
    ul.innerHTML = "";

    for (let taskbar of tasks) {
        console.log("la tache actuelle est:", taskbar);
        let li = generateLi(taskbar);
        ul.append(li);
    }
}

//un bouton "X". Utilisez la police géniale pour le bouton "X"

function generateLi(taskbar) {
    let li = document.createElement("li");
    
    let xMark = document.createElement("i");
    xMark.classList.add("fa-sharp", "fa-solid", "fa-xmark");
     let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let span = document.createElement("span");
    span.innerText = taskbar
    
    li.append(xMark,checkbox,span);
    return li;
}