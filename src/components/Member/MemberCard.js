import React, { Component, PropTypes } from 'react';
import styles from './MemberCard.css';
import CommonLoad from '../Common/CommonLoad';
import CommonForm from '../Common/CommonForm';

const items = [
  {
    label: '会员卡编号',
    id: 'cardid',
    initialValue: '09082803808',
    disabled: true,
  }, {
    label: '会员卡类型',
    id: 'cardtype',
    initialValue: '金卡',
    disabled: true,
  }, {
    label: '会员卡等级',
    id: 'cardlevel',
    initialValue: 'level1',
    disabled: true,
  }, {
    label: '会员卡折扣',
    id: 'discount',
    initialValue: '50%',
    disabled: true,
  }, {
    label: '会员卡积分',
    id: 'integration',
    initialValue: '50%',
    disabled: true,
    help: '注：消费一元的一个积分',
  }, {
    label: '是否挂失',
    id: 'lost',
    initialValue: '没有挂失记录%',
    disabled: true,
  }, {
    label: '冻结时间',
    id: 'frozentime',
    initialValue: '没有冻结',
    disabled: true,
  }, {
    label: '备注',
    id: 'remark',
    initialValue: '就是这样',
    disabled: true,
  },
];
class MemberCard extends Component {
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
      <div>
        {this.state.loading ? <CommonLoad /> : <CommonForm items={items} />}
      </div>
    );
  }
}

export default MemberCard;
