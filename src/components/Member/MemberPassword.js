import React, { Component, PropTypes } from 'react';
import { Form, Input, Message, Button } from 'antd';
import styles from './MemberPassword.css';

const FormItem = Form.Item;

class FormEx extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired,
    };
  }
  constructor(props) {
    super(props);
    this.state = { passwordDirty: false };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Message.error(`Received values of form: ${values}`, 1000);
      }
    });
  }
  handlePasswordBlur = (e) => {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致！');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 4,
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="新密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入新密码!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" onBlur={this.handlePasswordBlur} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认新密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认你的新密码!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" />,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认修改</Button>
        </FormItem>
      </Form>
    );
  }
}

const FormPassword = Form.create({})(FormEx);

function MemberPassword() {
  return (
    <FormPassword />
  );
}

export default MemberPassword;
