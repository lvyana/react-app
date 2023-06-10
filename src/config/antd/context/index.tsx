/**
 * @file 注入全局ant组件方法
 * @author ly
 * @createDate 2023年6月10日
 */
import React, { FC, useMemo } from 'react';
import useNotification, { OpenNotification } from './useNotification';
import useMessage, { MessageParam } from './useMessage';

type ContextMessageParam = {
	children: React.ReactNode;
};

/**
 * @param onNotification 打开通知提示框
 * @param onMessage 打开全局提示
 */
type ContextParam = {
	onNotification: OpenNotification;
	onMessage: MessageParam;
};

export const Context = React.createContext<ContextParam | null>(null);

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ContextMethod: FC<ContextMessageParam> = ({ children }) => {
	const { onNotification, contextNotification } = useNotification();

	const { onMessage, contextMessage } = useMessage();

	const contextValue = useMemo(() => ({ onNotification, onMessage }), []);

	return (
		<Context.Provider value={contextValue}>
			<>
				{children}
				{contextNotification}
				{contextMessage}
			</>
		</Context.Provider>
	);
};

export default ContextMethod;
