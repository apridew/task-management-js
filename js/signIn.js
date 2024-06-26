document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      window.location.href = "tasks.html";
    localStorage.setItem("userLogin", usernameByInput);

      console.log(result.message);
    } else {
      console.log(result.message);
    }
  });
});
