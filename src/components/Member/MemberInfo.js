/* eslint --fix: 0*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Card, Tooltip,
  Row, Col, Icon } from 'antd';
import styles from './MemberInfo.css';
import CommonForm from '../Common/CommonForm';
import CommonLoad from '../Common/CommonLoad';

function Nick() {
  return (
    <span>
      昵称&nbsp;
      <Tooltip title="你想让我们叫你什么?">
        <Icon type="question-circle-o" />
      </Tooltip>
    </span>
  );
}

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
const items = [
  {
    label: '会员姓名',
    id: 'name',
    initialValue: '徐腾峰',
    disabled: true,
  }, {
    label: <Nick />,
    id: 'nickname',
    initialValue: '徐念之',
    hasFeedback: true,
    rules: [{ required: true, message: '请输入你的昵称!' }],
    disabled: false,
  }, {
    label: '联系方式',
    id: 'tel',
    initialValue: '17790845823',
    hasFeedback: true,
    addonBefore: true,
    rules: [{ required: true, message: '请输入你的电话号码!' }],
    disabled: false,
  }, {
    label: '联系地址',
    id: 'address',
    cascader: true,
    options: residences,
    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
    rules: [{ type: 'array', required: true, message: '请选择联系地址!' }],
    disabled: false,
  }, {
    label: '个人简介',
    id: 'remark',
    initialValue: '哈哈哈',
    disabled: false,
  },
];

class MemberInfo extends Component {

  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired,
    };
  }
  constructor(props) {
    super(props);
    this.state = { loading: true, passwordDirty: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
  render() {
    const Loaded = (
      <Card title="会员信息" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </div>
        <div className="custom-card">
          <h3>Europe Street beat</h3>
          <p>www.instagram.com</p>
        </div>
      </Card>
    );
    return (
      <div className={styles.normal}>
        {
          this.state.loading ? <CommonLoad title="会员信息" /> :
          <Row gutter={16}>
            <Col span={12}>
              {Loaded}
            </Col>
            <Col span={12}>
              <CommonForm items={items} submit read />
            </Col>
          </Row>
        }
      </div>
    );
  }
}

export default connect()(MemberInfo);
