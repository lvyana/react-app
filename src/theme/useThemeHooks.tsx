import React from 'react';
import { Tabs, theme } from 'antd';

const { useToken } = theme;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useThemeHooks = () => {
	const { token } = useToken();

	return [token];
};

export default useThemeHooks;
