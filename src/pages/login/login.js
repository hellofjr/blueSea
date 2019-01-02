import React from 'react';

import { Input, Button, Row, Col, Form, Icon, Checkbox, message } from 'antd';
import UserController from '../../service/usercontroller';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        };
    }

    success = () => {
        message.success('登录成功!');
    };

    error = () => {
        message.error('密码错误!');
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                UserController.checkUserValid(values.userName, values.password).then((res) => {
                    console.log(res);
                    if (res && res.length == 1) {
                        this.success();
                        this.props.history.push('/home');
                    } else {
                        this.error();
                    }
                })
            }
        });
    }

    handleGoRegister = () => {
        this.props.history.push('/register');
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        let loginForm = {
            maxWidth: '300px',
            margin: 'auto',
            marginTop: '200px'
        }
        let forgotBtn = {
            float: 'right'
        }
        let formBtn = {
            width: '100%'
        }
        return (
            <Form onSubmit={this.handleSubmit} style={loginForm} >
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a style={forgotBtn} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" style={formBtn}>
                        Log in
              </Button >
                    Or <a onClick={this.handleGoRegister.bind(this)}>register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;