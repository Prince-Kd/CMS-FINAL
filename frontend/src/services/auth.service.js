import swal from 'sweetalert';


const getUser = () => {
  const userStr = sessionStorage.getItem('userData');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

const removeUserSession = () => {
  sessionStorage.removeItem('userData')
}
const getRole = (role, cb) => {
  const userRole = JSON.parse(sessionStorage.getItem('userData'));
  if(userRole.role !== role){
    swal("You are not authorized to use this feature.")
  }
  else{
    cb()
  }
    
}

const setUserSession = (user) => {
  sessionStorage.setItem('userData', JSON.stringify(user))
}

export {getUser, setUserSession, removeUserSession, getRole};