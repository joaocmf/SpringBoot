const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Itel = document.querySelector(".tel");

function cadastrar() {
    fetch("http://localhost:8080/user",
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                telefone: Itel.value,
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

};

function limpar() {
    Inome.value ="";
    Iemail.value ="";
    Itel.value ="";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
    

})