import React, { useState, useEffect } from 'react';
import actions from '../../actions'; //导入实例

const Expenses = () => {
  let [mes, setMes] = useState(0);

  useEffect(() => {
    console.log(mes);
  }, [mes]);

  actions.onGlobalStateChange((state: any) => {
    //监听全局状态
    console.log(state);

    mes = state;
  }, true);
  return (
    <div>
      <h2>Expenses</h2>
    </div>
  );
};

export default Expenses;
