btnBuscarCep = document.querySelector('#buscar-cep');
inputTextCep = document.querySelector('#text-cep');
diceCity = document.querySelectorAll('#contentDiceCity span');

btnBuscarCep.addEventListener('click', () => inputTextCep.value === '' ? alert('Digite o cep') : cep());

const cep = () => {
    let inputValueCep = inputTextCep.value.replace(/[^a-z0-9]/gi,'');
    const url = `https://viacep.com.br/ws/${inputValueCep}/json/`;

    const diceCep = async () => await fetch(url).then(response => response.json());

    const showDiceCep = async () => {
        const data = await diceCep();

        diceCity[0].textContent = `Cep: ${inputValueCep}`;
        diceCity[1].textContent = `Cidade: ${data.localidade}`;
        diceCity[2].textContent = `Rua: ${data.logradouro}`;
        diceCity[3].textContent = `Estado: ${data.uf}`;
    }
    
    showDiceCep();
}
