const tamanhoSenha = document.getElementById("tamanho");
const botaoGerar = document.getElementById("btnSenha");

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
const password = generatePassword(passwordLength, options);
console.log("Senha gerada:", password);

botaoGerar.addEventListener("click", () => {
  generatePassword(tamanhoSenha.value, options);
});
