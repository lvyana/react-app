import React, { FC, useContext } from 'react';

/**
 * 创建一个公用的useContext
 * ly
 * 日期：2020年4月27日
 */
export const MyContext = React.createContext(0);

interface MyUseContextProps {
	value: number;
}
const UseContextCom: FC<MyUseContextProps> = ({ children, value }) => {
	return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default UseContextCom;
