export const generateCupon = (length) => {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$@&!#';
  let password = '';
  for (let i = 0; i < length; ++i) {
    let at = Math.floor(Math.random() * charset.length);
    password += charset[at];
  }

  return password;
};
