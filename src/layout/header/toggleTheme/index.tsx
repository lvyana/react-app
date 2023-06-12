/**
 * @file 切换颜色主题
 * @author ly
 * @createDate 2022年11月19日
 */
import React, { useMemo } from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/store';
import { GET_THEME, SET_THEME } from '@/store/reducers/layout';
import IconFont from '@/utils/iconfont';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ToggleTheme = () => {
	const dispatch = useAppDispatch();

	const theme = useSelector(GET_THEME);

	const handleSizeChange = () => {
		if (theme === 'dark') {
			dispatch(SET_THEME('white'));
		} else if (theme === 'white') {
			dispatch(SET_THEME('dark'));
		}
	};

	const themeMenu = [
		{ label: 'icon-taiyang', key: 'dark' },
		{ label: 'icon-ClearNight-qing-yewan', key: 'white' }
	];

	const iconStr = useMemo(() => themeMenu.find((item) => item.key === theme)?.label, [theme]);
	return (
		<>
			<Button
				aria-label="ToggleTheme"
				type="link"
				icon={<IconFont type={iconStr || 'icon-taiyang'} style={{ transform: 'scale(1.4)' }} />}
				onClick={handleSizeChange}></Button>
		</>
	);
};

export default ToggleTheme;
