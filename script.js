function calcularIdade(anoNascimento) {
    return new Date().getFullYear() - anoNascimento;
}

const idade = calcularIdade(1991);
document.getElementById('idade').textContent = idade;