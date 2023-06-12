/**
 * @file 搜索
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Input, Button, Dropdown, InputRef } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

/**
 * 原理是事件触发顺序的不同 onmousedown => onblur=> onclick
 */

type OnMouseDownMenuItem = (path: string) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const HeaderSearch = () => {
	const navigate = useNavigate();

	// 控制下拉开关
	const [open, setOpen] = useState(false);
	// input值
	const [searchValue, setSearchValue] = useState('');
	// 搜索框开关
	const [searchOpen, setSearchOpen] = useState(false);
	// input Ref
	const searchRef = useRef<InputRef | null>(null);
	// 下拉数据集合
	const [searchList, setSearchList] = useState<object[] | null>(null);

	const checkbox = () => {
		setSearchOpen(true);
	};

	useEffect(() => {
		if (searchOpen) {
			searchRef.current?.focus();
		}
	}, [searchOpen]);

	const inputOnBlur = () => {
		setSearchValue('');
		setSearchList([]);
		setOpen(false);
		setSearchOpen(false);
	};

	const inputOnFocus = () => {
		if (searchValue) {
			setOpen(true);
		}
	};
	const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		// 随便赋一个值
		if (e.target.value) {
			setOpen(true);
			setSearchList([{ value: 1, id: 1 }]);
		} else {
			setSearchList([]);
		}
	};

	const onToRouter: OnMouseDownMenuItem = (path) => {
		navigate(path);
	};

	return (
		<div className="inline-block w-48 text-right">
			{searchOpen ? (
				<Dropdown open={open} menu={{ items: menu(searchList, onToRouter) }}>
					<Input
						placeholder="搜索"
						ref={searchRef}
						suffix={suffix}
						value={searchValue}
						onBlur={inputOnBlur}
						onFocus={inputOnFocus}
						onChange={searchChange}
						className="rounded-full"
						style={{
							width: searchOpen ? '192px' : 0,
							opacity: searchOpen ? 1 : 0,
							transitionProperty: 'width,opacity',
							transitionDuration: '0.5s,0.2s',
							transitionTimingFunction: 'ease-out'
							// transition: 'width,opacity 2s,0.2s'
						}}
					/>
				</Dropdown>
			) : (
				<Button
					type="link"
					// className="absolute left-36 top-4"
					// style={{ position: 'absolute', left: 156, top: 17, zIndex: 1 }}
					onClick={checkbox}
					icon={suffix}></Button>
			)}
		</div>
	);
};

export default HeaderSearch;

const suffix = (
	<SearchOutlined
		style={{
			fontSize: 16
		}}
	/>
);

const menu = (searchList: object[] | null, onMouseDown: OnMouseDownMenuItem) => {
	return searchList?.length
		? [
				{
					key: '1',
					label: <div onMouseDown={() => onMouseDown('/react/hooks/useState')}>go to useState</div>
				},
				{
					key: '2',
					label: <div onMouseDown={() => onMouseDown('/react/hooks/useEffect')}>go to useEffect</div>
				},
				{
					key: '3',
					label: <div onMouseDown={() => onMouseDown('/react/hooks/useLayoutEffect')}>go to useLayoutEffect</div>
				}
		  ]
		: [];
};
