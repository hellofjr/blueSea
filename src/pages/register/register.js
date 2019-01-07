import React from 'react';

import { Input, Button, Row, Col, Form, Icon, Checkbox } from 'antd';
import UserController from '../../service/usercontroller';

class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    handleRegister = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                // console.log('Received values of form: ', values);
                // this.props.history.push('/home');
                UserController.registerUser(values.userName, values.password).then((res) => {
                    if (res && res.length == 1) {
                        alert('注册成功!');
                        this.props.history.goBack();
                    } else {
                        alert('注册失败!');
                    }
                })
            }
        });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('请保持两次输入密码一致!');
        } else {
            callback();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        let registerForm = {
            maxWidth: '300px',
            margin: 'auto',
            marginTop: '200px'
        }
        let formBtn = {
            width: '100%'
        }
        return (
            <Form onSubmit={this.handleRegister} style={registerForm} >
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('passwordCommit', {
                        rules: [{ required: true, message: 'Please input your Password!' }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={formBtn}>
                        Register !
              </Button >
                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalregisterForm = Form.create()(Register);

export default WrappedNormalregisterForm;