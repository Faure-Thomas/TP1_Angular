// Ajouter une tache -------------------------------------------------------------------------------------------------------------

var liste = document.querySelector('ul');

document.querySelector('.addTool #ajouter').addEventListener('click', () => {

    var input = document.querySelector('input').value;

    if(input) {
        const li = document.createElement('li');
        li.innerHTML =  `<div class="taskDiv">
                            <p class="task">${input}</p>
                            <div class="etat">
                                <p>A faire</p>
                                <img src="assets/tick.svg" alt="tick">
                                <button class="update">Modifier</button>
                                <button class="delete">Supprimer</button>
                            </div>
                        </div>`;
        liste.appendChild(li);
        document.querySelector('input').value = '';
        deleteEvent();
        updateEvent();
        updateState();
    }

});


// Modifier l'état d'une tache -------------------------------------------------------------------------------------------------------------

function updateState() {

    var ticks = document.querySelectorAll('img');

    ticks.forEach(tick => {
        tick.addEventListener('click', (e) => {
            var div = e.path[1];
            div.querySelector('p').innerHTML = `Fait`;
            div.querySelector('img').remove();
        });
    });

}

updateState();


// Supprimer une tache -------------------------------------------------------------------------------------------------------------

function deleteEvent() {

    var deletes = document.querySelectorAll('.delete');

        deletes.forEach(del => {
            del.addEventListener('click', (e) => { 
                e.path[2].remove();
            });
        });

}

deleteEvent();


// Modifier une tache -------------------------------------------------------------------------------------------------------------

function updateEvent() {

var updates = document.querySelectorAll('.update');

    updates.forEach(update => {
        update.addEventListener('click', (e) => {

            var div = e.path[2];
            document.querySelector('input').value = div.querySelector('p').innerHTML;
            div.remove();

            var valider = document.querySelector('#ajouter');
            valider.innerHTML = `Valider`;
            valider.addEventListener('click', () => {
                div.querySelector('p').innerHTML = document.querySelector('input').value;
                valider.innerHTML = `Ajouter`;
            })

        });
    });

}

updateEvent();


// Voir les données -------------------------------------------------------------------------------------------------------------

var view = document.querySelector('#view');
    
view.addEventListener('click', (e) => {
    
    var modal = document.querySelector('#modal');
    var content = document.querySelector('#modal .content');
    var tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        const div = document.createElement('div');
        var state = document.querySelector('.taskDiv .etat p').innerHTML;
        console.log(state);
        div.innerHTML =  `<div class='modalTask'>
                            <p>${task.innerHTML}</p>
                            <p>${state}</p>
                        </div>`;
        content.appendChild(div);
    });

    modal.style.display = 'block';

    window.addEventListener('click', (e) => {
        if(e.target == modal) {
            modal.remove();
        }
    });

});





