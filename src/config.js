const ENV = {
    DEV : 'http://localhost:2000',
    fjr_public : 'http://212.64.56.157:2000'
}

const UsingEnv = ENV.DEV;

const checkUserValid = UsingEnv + '/users/userValid';

const registerUser = UsingEnv + '/users/add';


export { checkUserValid, registerUser }