/**
 * @name 创建一个公用的useContext
 * @user ly
 * @date 日期：2020年4月27日
 */
import React, { FC, useContext } from 'react';

export interface sumProps {
	count: number;
	sum?: number;
}

export interface dispatchProps {
	type: string;
	value: number;
}

interface MyUseContextProps {
	sum: sumProps;
	dispatch: React.Dispatch<dispatchProps>;
	children?: React.ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const MyContext = React.createContext<MyUseContextProps | null>(null);

const IuseContextCom: FC<MyUseContextProps> = ({ children, sum, dispatch }) => {
	return <MyContext.Provider value={{ sum, dispatch }}>{children}</MyContext.Provider>;
};

export default IuseContextCom;
