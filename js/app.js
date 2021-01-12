// Ajouter une tache -------------------------------------------------------------------------------------------------------------

var liste = document.querySelector('ul');

document.querySelector('.addTool #ajouter').addEventListener('click', () => {

    var input = document.querySelector('input').value;

    if(input) {
        const li = document.createElement('li');
        li.innerHTML =  `<div>
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
    }

});


// Modifier l'état d'une tache -------------------------------------------------------------------------------------------------------------

var ticks = document.querySelectorAll('img');

ticks.forEach(tick => {
    tick.addEventListener('click', (e) => {
        var div = e.path[1];
        div.querySelector('p').innerHTML = `Fait`;
        div.querySelector('img').style.display = 'none';
    });
});


// Supprimer une tache -------------------------------------------------------------------------------------------------------------

function deleteEvent() {

    var deletes = document.querySelectorAll('.delete');

        deletes.forEach(del => {
            del.addEventListener('click', (e) => {
                e.path[2].style.display = 'none';     
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
            div.style.display = 'none';

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
    var tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        const div = document.createElement('div');
        div.innerHTML =  `<div>
                            <p>${task.value}</p>
                            <p>A faire</p>
                        </div>`;
        modal.appendChild(div);
        console.log(div);

    });

    modal.style.display = 'block';

    window.addEventListener('click', (e) => {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    });

});





