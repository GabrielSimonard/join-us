/* Abrir o Modal */

let modal = document.getElementById('modal');

let btn = document.getElementById('btn-adicionar');

let span = document.getElementsByClassName('close')[0];

let tamanho = document.querySelector('.tamanhos');


console.log(tamanho);

btn.addEventListener('click', function() {
	modal.style.display = "block";
});

span.addEventListener('click', function() {
	modal.style.display = "none";
});

window.addEventListener('click', function(event) {
	if (event.target == modal) {
        modal.style.display = "none";
    }
});

