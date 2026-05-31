//validação do login e signin

//validação do nome:
export function validateName(e, setNameError) {
  const input = e.target;

  if (input.validity.tooShort) {
    setNameError("O nome deve ter pelo menos 2 caracteres");
  } else {
    setNameError("");
  }
}

//validação do telefone:
export function validatePhone(e, setPhoneError) {
  const valor = e.target.value;

  if (!/^[\d\s()+-]*$/.test(valor)) {
    setPhoneError("Digite um telefone válido");
  } else if (valor.length > 0 && valor.length < 10) {
    setPhoneError("O telefone deve ter pelo menos 10 caracteres");
  } else {
    setPhoneError("");
  }
}

//validação da cidade:
export function validateCity(e, setCityError) {
  const input = e.target;

  if (input.validity.tooShort) {
    setCityError("Digite uma cidade válida");
  } else {
    setCityError("");
  }
}

//validação do endereço
export function validateAdress(e, setAdressError) {
  const input = e.target;

  if (input.validity.tooShort) {
    setAdressError("Digite uma cidade válida");
  } else {
    setAdressError("");
  }
}

//validação do email
export function validateEmail(e, setEmailError) {
  const valor = e.target.value;

  if (valor.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    setEmailError("Digite um e-mail válido");
  } else {
    setEmailError("");
  }
}

//validação da senha
export function validatePassword(e, setPasswordError) {
  const input = e.target;

  if (input.validity.tooShort) {
    setPasswordError("A senha deve ter pelo menos 8 caracteres");
  } else {
    setPasswordError("");
  }
}

//validação do agendamento:

//validação nome do pet
export function validatePetName(e, setPetNameError) {
  const value = e.target.value;

  if (value.length < 2) {
    setPetNameError("O nome deve ter pelo menos 2 caracteres");
  } else {
    setPetNameError("");
  }
}

//validação raça
export function validateBreed(e, setBreedError) {
  const input = e.target;

  if (input.validity.tooShort) {
    setBreedError("O nome deve ter pelo menos 2 caracteres");
  } else {
    setBreedError("");
  }
}

//validação nome do tutor
export function validateTutorName(e, setTutorNameError) {
  const input = e.target;

  if (input.validity.tooShort) {
    setTutorNameError("O nome deve ter pelo menos 2 caracteres");
  } else {
    setTutorNameError("");
  }
}
//validação telefone
