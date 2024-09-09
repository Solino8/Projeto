let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmaSenha = document.querySelector('#confirmaSenha');
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha');
let validConfirmaSenha = false;

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        validNome = true;
    }
});

email.addEventListener('keyup', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = '<strong>Email *Insira um email válido</strong>';
        validEmail = false;
    } else {
        labelEmail.setAttribute('style', 'color: green');
        labelEmail.innerHTML = 'Email';
        validEmail = true;
    }
});

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red');
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        validUsuario = true;
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = '<strong>Senha *Insira no mínimo 8 caracteres</strong>';
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        validSenha = true;
    }
});

confirmaSenha.addEventListener('keyup', () => {
    if (senha.value !== confirmaSenha.value) {
        labelConfirmaSenha.setAttribute('style', 'color: red');
        labelConfirmaSenha.innerHTML = '<strong>Confirme a senha *As senhas não conferem</strong>';
        validConfirmaSenha = false;
    } else {
        labelConfirmaSenha.setAttribute('style', 'color: green');
        labelConfirmaSenha.innerHTML = 'Confirme a senha';
        validConfirmaSenha = true;
    }
});

function cadastrar() {
    if (validNome && validEmail && validUsuario && validSenha && validConfirmaSenha) {
        let user = {
            nome: nome.value,
            email: email.value,
            usuario: usuario.value,
            senha: senha.value
        };

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Erro ao realizar o cadastro: ' + data.message);
            }
        })
        .catch(error => console.error('Erro:', error));
    } else {
        alert('Preencha todos os campos corretamente antes de cadastrar.');
    }
}
