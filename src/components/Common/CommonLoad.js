import React from 'react';
import { Card } from 'antd';
import styles from './CommonLoad.css';

function CommonLoad(props) {
  return (
    <Card loading title={props.title}>
      会员信息
    </Card>
  );
}

export default CommonLoad;
