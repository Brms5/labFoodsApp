export interface PostRegisterForm {
  name: String;
  email: String;
  cpf: String;
  password: String;
}

export interface PutRegisterForm {
  name: String;
  email: String;
  cpf: String;
}

export interface PutAddressForm {
  street: String;
  number: String;
  neighbourhood: String;
  city: String;
  state: String;
  complement: String;
}
