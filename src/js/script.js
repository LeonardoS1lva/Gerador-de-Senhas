const tamanhoSenha = document.getElementById("tamanho");
const botaoGerar = document.getElementById("btnSenha");
const inputSenha = document.getElementById("txtSenha");
const botaoCopiar = document.getElementById("btnCopy");

function generatePassword(length, options) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allCharacters = "";
  if (options.includeLowercase) allCharacters += lowercase;
  if (options.includeUppercase) allCharacters += uppercase;
  if (options.includeNumbers) allCharacters += numbers;
  if (options.includeSpecialCharacters) allCharacters += specialCharacters;

  if (allCharacters === "") {
    throw new Error("Nenhuma opção de caractere selecionada.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

// Exemplo de uso:
const options = {
  includeLowercase: true,
  includeUppercase: true,
  includeNumbers: true,
  includeSpecialCharacters: true,
};

const passwordLength = 12;

botaoGerar.addEventListener("click", () => {
  let password = generatePassword(tamanhoSenha.value, options);
  inputSenha.value = password;
});

botaoCopiar.addEventListener("click", () => {
  inputSenha.select();
  document.execCommand("copy");
  alert("Senha copiada para a área de transferência.");
});