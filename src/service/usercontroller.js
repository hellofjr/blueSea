import { checkUserValid, registerUser } from '../config';
import HttpUtils from './httpcontroller';
import { Component } from 'react';

export default class UserController extends Component {
    static checkUserValid = (name) => {
        let param = {
            name: name,
        }
        return HttpUtils.getRequest(checkUserValid, param);
    }

    static registerUser = (name, password) => {
        let param = {
            name: name,
            password: password
        }
        return HttpUtils.postRequrst(registerUser, param);
    }
}