export const getToken = (email, password) => {
  return fetch("http://localhost:3005/login", {
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
    .catch((err) => console.log(err))
    .then(({ token }) => localStorage.setItem("token", token));
};
