/**
 * @file 切换颜色主题
 * @author ly
 * @createDate 2022年11月19日
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/store';
import { GET_THEME, SET_THEME, ThemeType } from '@/store/reducers/layout';
import { Button, Dropdown } from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';
import style from '../index.module.scss';

const ToggleTheme = () => {
	const dispatch = useAppDispatch();

	const theme = useSelector(GET_THEME);

	const handleSizeChange = ({ key }: { key: string }) => {
		dispatch(SET_THEME(key as ThemeType));
	};

	const themeMenu = [
		{ label: '默认', key: 'theme1', disabled: theme === 'theme1' },
		{ label: '暗黑', key: 'theme2', disabled: theme === 'theme2' }
	];
	return (
		<>
			<Dropdown
				menu={{ items: themeMenu, onClick: handleSizeChange }}
				placement="bottom"
				trigger={['click']}
				overlayClassName={style['layout-dropdown']}>
				<Button type="link" icon={<BgColorsOutlined />}></Button>
			</Dropdown>
		</>
	);
};

export default ToggleTheme;
