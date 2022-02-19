import React, { useState, useEffect } from 'react';
import actions from '../../actions'; //导入实例
import { DatePicker } from 'antd';
import { Column } from '@antv/g2plot';

const Expenses = () => {
  let [mes, setMes] = useState(0);

  useEffect(() => {
    console.log(mes, '1111');
    initChar();
  }, []);
  const initChar = () => {
    console.log('11');

    const data = [
      {
        type: '家具家电',
        sales: 38,
      },
      {
        type: '粮油副食',
        sales: 52,
      },
      {
        type: '生鲜水果',
        sales: 61,
      },
      {
        type: '美容洗护',
        sales: 145,
      },
      {
        type: '母婴用品',
        sales: 48,
      },
      {
        type: '进口食品',
        sales: 38,
      },
      {
        type: '食品饮料',
        sales: 38,
      },
      {
        type: '家庭清洁',
        sales: 38,
      },
    ];
    const columnPlot = new Column('char', {
      data,
      xField: 'type',
      yField: 'sales',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: '类别',
        },
        sales: {
          alias: '销售额',
        },
      },
    });

    columnPlot.render();
  };
  actions.onGlobalStateChange((state: any) => {
    //监听全局状态
    console.log(state);
    mes = state;
  }, true);
  return (
    <div>
      <h2>Expenses</h2>
      <DatePicker />
      <div id="char"></div>
    </div>
  );
};

export default Expenses;
