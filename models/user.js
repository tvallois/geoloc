class User {
  constructor(id, login, password, email) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.email = email;
  }
  get id() {
    return this.user_id;
  }

  get login() {
    return this.user_login;
  }

  get password() {
    return this.user_password;
  }

  get email() {
    return this.user_email;
  }

  set id(value) {
    this.user_id = value;
  }

  set login(value) {
    this.user_login = value;
  }

  set password(value) {
    this.user_password = value;
  }

  set email(value) {
    this.user_email = value;
  }
}

module.exports = User;
