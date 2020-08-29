const colors = ["green","blue","red"];
const btn_green = document.getElementById("btn-green");
const btn_blue = document.getElementById("btn-blue");
const btn_red = document.getElementById("btn-red");
const color = document.querySelector(".color");

btn_green.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[0];
  color.textContent = colors[0];
});

btn_blue.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[1];
  color.textContent = colors[1];
});

btn_red.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[2];
  color.textContent = colors[2];
});

var btnEnviar = document.querySelector('.enviar');

btnEnviar.addEventListener('click', event => {
    event.preventDefault();
    var inputNome = document.querySelector('#nome').value;
    var inputMensagem = document.querySelector('#mensagem').value;
    if (inputNome || inputMensagem) {
        var txtNome = document.createTextNode(inputNome);
        var txtMensagem = document.createTextNode(inputMensagem);
        
        var p = document.createElement('p');
        p.appendChild(txtNome);
        p.appendChild(txtMensagem);

        var btnExcluir = document.createElement('button')
        btnExcluir.appendChild(document.createTextNode('Excluir'));
        btnExcluir.classList.add('botao-excluir');
        btnExcluir.addEventListener('click', event => {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
        })

        var div = document.createElement('div');
        div.appendChild(p);
        div.appendChild(btnExcluir);
        div.classList.add('div-interno');

        var li = document.createElement('li');
        li.appendChild(div);

        var ul = document.querySelector('.ul');
        ul.style.listStyle = 'none';
        ul.appendChild(li);

        var lista = document.querySelector('.lista');
        lista.appendChild(ul);
    }
});

