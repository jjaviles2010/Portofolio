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

    const btns = document.querySelectorAll('.btn__active');
    const descriptions = document.querySelectorAll('.box__descriptions');
    
    btns.forEach((btn) => {
        btn.className = btn.className.replace('btn__active', 'btn__inactive');
    });
    
    descriptions.forEach((box) => {
        box.className = box.className.replace('box__active', '');
    });

    element.className = element.className + ' btn__active';
    const elementBox = document.querySelector(`.box__${boxToShow}`);
    elementBox.className = elementBox.className + ' box__active';
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

function enviar() {
    //console.log(document.querySelector('.name__field').value);
    const name = document.querySelector('.name__field').value;
    const subject = document.querySelector('.subject__field').value;
    const email = document.querySelector('.email__field').value;
    const message = document.querySelector('.message__field').value;


    const msg = {
        from: "leandro.faria@assessoria.app",
        to :email,
        text:`
            Nome: ${name},
            Email: ${email},
            Message: ${subject}
            `
    };

    fetch('https://fiap-sender.herokuapp.com/email/send',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msg),
        }
    ).then(data => {
        console.log(data);
        alert('email enviado com sucesso');
    }).catch(erro => {
        console.error(erro);
        alert('erro ao enviar email');
    });

}


// function enviar() {
//     //console.log(document.querySelector('.name__field').value);
//     const name = document.querySelector('.name__field').value;
//     const subject = document.querySelector('.subject__field').value;
//     const email = document.querySelector('.email__field').value;
//     const message = document.querySelector('.message__field').value;

//     const msg = {
//         from: "leandro.faria@assessoria.app",
//         to :email,
//         text:`
//             Nome: ${name},
//             Email: ${email},
//             Message: ${subject}
//             `
//     };

//     try {
//         const data = await fetch('https://fiap-sender.herokuapp.com/email/send',
//             {
//                 method: 'POST',
//                 body: JSON.stringify(msg),
//             }
//         )
//         }catch(err){
//             console.error(err);
//         }
//     ;

// }