import React, { Component } from 'react';
import { Form, Input,
  Tooltip, Icon, Cascader, Message,
  Select, Row, Col, Checkbox, Button } from 'antd';
import styles from './CommonForm.css';

const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class FormEx extends Component {
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
      callback('Two passwords that you enter is inconsistent!');
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }} className={styles['icp-selector']}>
        <Option value="86">+86</Option>
      </Select>,
    );
    return (
      <Form onSubmit={this.handleSubmit}>
        {(this.props.items || []).map((e, index) => {
          return (<FormItem
            {...formItemLayout}
            key={index}
            label={e.label || ''}
            help={e.help || ''}
            style={e.read ? { marginBottom: 8 } : null}
            hasFeedback={e.hasFeedback}
            colon
          >
            {getFieldDecorator(e.id, {
              initialValue: e.initialValue || '',
              rules: e.rules,
              // rules: [{ required: true, message: '请输入你的昵称!' }],
            })(
              e.cascader ? <Cascader options={e.options} /> :
              <Input disabled={e.disabled} addonBefore={e.addonBefore && prefixSelector} />,
            )}
          </FormItem>
          );
        })}
        {this.props.read && <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            rules: [{ required: true, message: '请阅读协议!' }],
          })(
            <Checkbox>我已经阅读了 <a>相关协议</a></Checkbox>,
            )}
        </FormItem>}
        {this.props.submit && <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认修改</Button>
        </FormItem>}
      </Form>
    );
  }
}

const CommonForm = Form.create({})(FormEx);

export default CommonForm;
