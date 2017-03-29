/* eslint no-console: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Styles from './Member.css';

const { Header, Content, Footer, Sider } = Layout;


class Member extends Component {

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
    // if (collapsed) {
    //   document.querySelector('./')
    // }
    this.setState({ collapsed });
  }
  handleMenuClick = (e) => {
    const { router } = this.context;
    let path = '';
    switch (e.key) {
      case '2':
        path = '/member/record';
        break;
      case '3':
        path = '/member/card';
        break;
      case '4':
        path = '/member/password';
        break;
      default:
        path = '/member';
        break;
    }
    router.push({
      pathname: path,
    });
    // e.stopPropagation();
    // e.preventDefault();
  }

  render() {
    const styleNavText = this.state.collapsed ? Styles['nav-text'] : 'undefined';
    return (
      <Layout style={{ minHeight: '680px' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={Styles.logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={this.handleMenuClick}
          >
            <Menu.Item key="1" ref={(e) => { this.menuItem = e; }}>
              <Icon type="user" />
              <span className={styleNavText}>查看个人信息</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className={styleNavText}>查询消费记录</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className={styleNavText}>查看会员卡信息</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className={styleNavText}>修改密码</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ flex: 1 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 0, background: '#fff', minHeight: 360 }}>
              {this.props.children}
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
export default connect()(Member);
