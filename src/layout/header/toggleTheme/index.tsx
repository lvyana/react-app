/**
 * @file 切换颜色主题
 * @author ly
 * @createDate 2022年11月19日
 */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/store';
import { GET_THEME, SET_THEME, ThemeType } from '@/store/reducers/layout';
import { Button, Dropdown } from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';
import style from '../index.module.scss';
import IconFont from '@/utils/iconfont';

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
			{/* <Dropdown
				arrow={{ pointAtCenter: true }}
				getPopupContainer={() => document.getElementById('header-icon-function') as HTMLElement}
				menu={{ items: themeMenu, onClick: handleSizeChange }}
				placement="bottom"
				trigger={['click']}
				overlayClassName={style['layout-dropdown']}> */}
			<Button
				type="link"
				icon={<IconFont type={iconStr || 'icon-taiyang'} style={{ transform: 'scale(1.4)' }} />}
				onClick={handleSizeChange}></Button>
			{/* </Dropdown> */}
		</>
	);
};

export default ToggleTheme;
