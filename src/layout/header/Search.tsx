import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import type { MenuProps } from 'antd';
import { Input, Button, Dropdown, Menu } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const HeaderSearch = () => {
	const [search, setSearch] = useState(false);
	const searchRef = useRef(null);
	const [searchList, setSearchList] = useState<object[] | null>(null);
	const checkbox = () => {
		setSearch(true);
	};

	useEffect(() => {
		if (search) {
			console.log(searchRef.current);
			(searchRef.current as unknown as HTMLInputElement).focus();
		}
	}, [search]);

	const inputOnBlur = () => {
		setSearch(false);
		setSearchList([]);
	};

	const searchChange = (e: ChangeEvent) => {
		console.log((e.target as HTMLInputElement).value);
		// 随便赋一个值
		if ((e.target as HTMLInputElement).value) {
			setSearchList([{ value: 1, id: 1 }]);
		} else {
			setSearchList([]);
		}
	};
	return (
		<span style={{ width: '200px', display: 'inline-block' }}>
			{search ? (
				<Dropdown overlay={menu(searchList)}>
					<Input
						placeholder="搜索"
						ref={searchRef}
						suffix={suffix}
						onBlur={inputOnBlur}
						onChange={searchChange}
						style={{ borderRadius: '32px' }}
					/>
				</Dropdown>
			) : (
				<Button type="link" style={{ marginLeft: '157px' }} onClick={checkbox}>
					{suffix}
				</Button>
			)}
		</span>
	);
};

export default HeaderSearch;

const suffix = (
	<SearchOutlined
		style={{
			fontSize: 16,
			color: '#1890ff'
		}}
	/>
);

const menu = (searchList: object[] | null) => {
	return (
		<>
			{searchList?.length ? (
				<Menu
					items={[
						{
							key: '1',
							label: (
								<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
									1st menu item
								</a>
							)
						},
						{
							key: '2',
							label: (
								<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
									3rd menu item (disabled)
								</a>
							)
						},
						{
							key: '3',
							label: 'a danger item'
						}
					]}></Menu>
			) : (
				''
			)}
		</>
	);
};
