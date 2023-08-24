export const getJWTauthCookies = () => {
  const cookieValue = document.cookie;

  return cookieValue;
};

//'name=value';'name2=value'
