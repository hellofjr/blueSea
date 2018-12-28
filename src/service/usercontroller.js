import { checkUserValid } from '../config';
import HttpUtils from './httpcontroller';
import { Component } from 'react';

export default class UserController extends Component {
    static checkUserValid = (name) => {
        let param = {
            name: name
        }
        return HttpUtils.getRequest(checkUserValid, param);
    }
}