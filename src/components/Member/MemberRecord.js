import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Icon, Table } from 'antd';
// import CommonTable from '../Common/CommonTable';
import styles from './MemberRecord.css';

const columns = [{
  title: '消费记录编号',
  dataIndex: 'shoppingno',
  render: text => <a href={undefined}>{text}</a>,
}, {
  title: '会员卡号',
  dataIndex: 'cardId',
}, {
  title: '商品名称',
  dataIndex: 'good',
}, {
  title: '商品类型',
  dataIndex: 'goodtype',
}, {
  title: '购买时间',
  dataIndex: 'buytime',
}, {
  title: '购买总数',
  dataIndex: 'buysum',
}, {
  title: '商品价格',
  dataIndex: 'price',
}, {
  title: '备注',
  dataIndex: 'desc',
}, {
  title: '操作',
  render: (text, record) => (
    <span>
      <a href={undefined}>查看详情 一 {record.shoppingno}</a>
    </span>
  ),
}];

const data = [{
  id: '1',
  shoppingno: '0090807',
  cardId: 201701160090,
  good: '套餐1',
  goodtype: '限卖类',
  buytime: '20170117080808',
  buysum: 29,
  price: 67.9,
  desc: '很好的商品',
}, {
  id: '2',
  shoppingno: '0090808',
  cardId: 201701160091,
  good: '套餐2',
  goodtype: '限卖类',
  buytime: '20170117080840',
  buysum: 20,
  price: 67.9,
  desc: '很好的商品',
}, {
  id: '3',
  shoppingno: '0090809',
  cardId: 201701160092,
  good: '套餐3',
  goodtype: '限卖类',
  buytime: '20170117080950',
  buysum: 28,
  price: 67.9,
  desc: '很好的商品',
}];

class MemberRecord extends Component {
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
    return (
      <Table style={{ width: '100%' }} rowKey="id" columns={columns} dataSource={data} />
    );
  }
}


export default connect()(MemberRecord);
