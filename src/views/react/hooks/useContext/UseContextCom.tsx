/**
 * @name 创建一个公用的useContext
 * @user ly
 * @date 日期：2020年4月27日
 */
import React, { FC, useContext } from 'react';

export const MyContext = React.createContext<MyUseContextProps | null>(null);

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

const IuseContextCom: FC<MyUseContextProps> = ({ children, sum, dispatch }) => {
	return <MyContext.Provider value={{ sum, dispatch }}>{children}</MyContext.Provider>;
};

export default IuseContextCom;
