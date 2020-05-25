const setToken = (newToken) => {
  localStorage.setItem('token', newToken);
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { setToken, getToken };
