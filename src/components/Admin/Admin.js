/* eslint no-console: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Styles from './Admin.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class Admin extends Component {

  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '680px' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={Styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">查看会员信息</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">修改个人信息</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">查看会员消费信息</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">操作会员信息</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="heart-o" />
              <span className="nav-text">增加新产品</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="team" />
              <span className="nav-text">修改密码</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ backgroundColor: '#ececec' }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 0, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default connect()(Admin);
