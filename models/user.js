class User {
  constructor(id, login, password, email) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.email = email;
  }
  get id() {
    return this.id;
  }

  get login() {
    return this.login;
  }

  get password() {
    return this.password;
  }

  get email() {
    return this.email;
  }

  set id(value) {
    this.id = value;
  }

  set login(value) {
    this.login = value;
  }

  set password(value) {
    this.password = value;
  }

  set email(value) {
    this.email = value;
  }
}

module.exports = User;
