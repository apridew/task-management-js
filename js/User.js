class User {
  constructor() {
    this.users = this.getUsers()
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    const isUserExist = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (isUserExist) {
      return {
        success: true,
        usernameByInput,
        message : 'login success'
      }
    }else{
        return{
            success: false,
            message : 'username not found'
        }
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
