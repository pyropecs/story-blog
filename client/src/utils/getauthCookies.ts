export const getJWTauthCookies = () => {
  const jwtCookie = document.cookie;
  const value = jwtCookie.split("=");

  return value[1];
};

//'name=value';'name2=value'
