/**
 * @file 实现搜索
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Input, Button, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const HeaderSearch = () => {
	const [search, setSearch] = useState(false);
	const searchRef = useRef(null);
	const [searchList, setSearchList] = useState<object[] | null>(null);
	const checkbox = () => {
		setSearch(true);
	};

	useEffect(() => {
		if (search) {
			(searchRef.current as unknown as HTMLInputElement).focus();
		}
	}, [search]);

	const inputOnBlur = () => {
		setSearch(false);
		setSearchList([]);
	};

	const searchChange = (e: ChangeEvent) => {
		// 随便赋一个值
		if ((e.target as HTMLInputElement).value) {
			setSearchList([{ value: 1, id: 1 }]);
		} else {
			setSearchList([]);
		}
	};
	return (
		<div className="inline-block w-48 text-right">
			<Dropdown menu={{ items: menu(searchList) }}>
				<Input
					placeholder="搜索"
					ref={searchRef}
					suffix={suffix}
					onBlur={inputOnBlur}
					onChange={searchChange}
					className="rounded-full"
					style={{
						width: search ? '192px' : 0,
						opacity: search ? 1 : 0,
						transitionProperty: 'width,opacity',
						transitionDuration: '0.5s,0.2s',
						transitionTimingFunction: 'ease-out'
						// transition: 'width,opacity 2s,0.2s'
					}}
				/>
			</Dropdown>

			{!search && (
				<Button
					type="link"
					// className="absolute left-36 top-4"
					style={{ position: 'absolute', left: 156, top: 17 }}
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

const menu = (searchList: object[] | null) => {
	return searchList?.length
		? [
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
		  ]
		: [];
};
