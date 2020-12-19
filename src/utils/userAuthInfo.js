import Cookies from 'js-cookie';

export const isUserAuth = () => {
  const isUserLogged = Cookies.get('MobiAppUserLogged');
  if (isUserLogged !== 'undefined' && isUserLogged === 'true') {
    return true;
  } else {
    return false;
  }
};

export const setUserAuth = (userName) => {
  Cookies.set('MobiAppUser', userName);
  Cookies.set('MobiAppUserLogged', 'true');
};

export const clearAuth = () => {
  Cookies.remove('MobiAppUser');
  Cookies.set('MobiAppUserLogged');
};

export const getUserName = () => {
  return Cookies.get('MobiAppUser');
};
