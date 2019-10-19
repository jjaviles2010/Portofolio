

class PrimeiraClasse {
    constructor() {
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


function enviar() {
    const name = document.querySelector('.name__field').value;
    const subject = document.querySelector('.subject__field').value;
    const email = document.querySelector('.email__field').value;
    const message = document.querySelector('.message__field').value;


    const msg = {
        from: "leandro.faria@assessoria.app",
        to: email,
        subject: subject,
        text: `
            Nome: ${name},
            Email: ${email},
            Message: ${subject}
            `
    };

    fetch('https://fiap-sender.herokuapp.com/email/send',
        {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'accept-encoding': 'gzip, deflate',
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