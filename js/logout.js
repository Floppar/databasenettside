function logout() {
    Auth.signOut().Then(() => {
        sessionStorage.removeItem("uid");
        window.location.href = "login.html";
    });
}