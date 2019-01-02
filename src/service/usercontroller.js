import { checkUserValid, registerUser } from '../config';
import HttpUtils from './httpcontroller';
import { Component } from 'react';

export default class UserController extends Component {
    static checkUserValid = (name, password) => {
        let param = {
            name: name,
            password: password
        }
        return HttpUtils.postRequrst(checkUserValid, param);
    }

    static registerUser = (name, password) => {
        let param = {
            name: name,
            password: password
        }
        return HttpUtils.postRequrst(registerUser, param);
    }
}