function load() {
    alert(1);
}

function btnClick() {
    alert('fui clicado');
}


class PrimeiraClasse {
    constructor() {
        console.log('oi');
        console.log(document.querySelector('.btn'));
        console.log(document.getElementById('botao1'));
    }
}

function load() {
    const load = new PrimeiraClasse();
}

function showBoxInfo(element) {
    const boxToShow = element.getAttribute('data-box');

    const btns = document.querySelectorAll('.btn-infos');
    const descriptions = document.querySelectorAll('.box__descriptions');
    
    btns.forEach((btn) => {
        btn.className = btn.className.replace('btn__active', '');
    });

    descriptions.forEach((box) => {
        box.className = box.className.replace('box__descriptions', '');
    });

    document.querySelector(`box__${boxToShow}`).className = 'box__active';
}

function showResume() {
    let btnExperience = document.getElementById('btn__experience');
    let btnEducation = document.getElementById('btn__education');
    let btnResume = document.getElementById('btn__resume');
    let boxExperience = document.getElementById('box__experience');
    let boxEducation = document.getElementById('box__education');
    btnExperience.className = '';
    btnEducation.className = '';
    btnResume.className = 'btn__active';

}

function showExperience() {

}

function showEducation() {

}
