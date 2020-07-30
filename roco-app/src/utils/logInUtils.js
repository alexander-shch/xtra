export const getToken = (email, password) => {
  fetch("http://localhost:3005/login", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then(({ token }) => localStorage.setItem("token", token));
};
