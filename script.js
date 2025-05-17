function validarCadastro() {
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const erro = document.getElementById('mensagemErroCadastro');

  if (senha !== confirmarSenha) {
    erro.textContent = "As senhas não coincidem.";
    return false;
  }

  erro.textContent = "";
  alert("Cadastro realizado com sucesso!");
  return true;
}

function validarLogin() {
  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  const erro = document.getElementById('mensagemErroLogin');

  if (email === "" || senha === "") {
    erro.textContent = "Preencha todos os campos.";
    return false;
  }

  erro.textContent = "";
  alert("Login realizado com sucesso!");
  return true;
}