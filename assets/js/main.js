const pergunta = document.querySelectorAll(".box__pergunta")
const resposta = document.querySelectorAll(".box__resposta")

for (let i = 0; i < pergunta.length; i++) {
    pergunta[i].addEventListener('click' , () => {
        if(pergunta[i].classList.contains('fa-angle-down--ativo')) {
            pergunta[i].classList.toggle('fa-angle-down--ativo')
            resposta[i].classList.toggle('box__resposta--ativa')
        }
        else {
            pergunta[i].classList.add('fa-angle-down--ativo')
            resposta[i].classList.add('box__resposta--ativa')
        }
    })
}