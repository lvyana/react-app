import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Button } from 'antd';
import { BUTTON } from './type';
const ButtonList = ({ buttonList, loadingName, editBtn }: BUTTON) => {
  const size = useSelector((state: RootState) => state.layout.size);
  return (
    <>
      {buttonList.map((item, i) => (
        <Button
          key={i}
          type={item.type}
          onClick={editBtn}
          disabled={item.disabled === true}
          loading={loadingName === item.name}
          size={size}
          style={{ marginRight: '20px' }}
        >
          {item.name}
        </Button>
      ))}
    </>
  );
};
export default ButtonList;
