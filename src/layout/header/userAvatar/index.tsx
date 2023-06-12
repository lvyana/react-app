/**
 * @file 头像
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { Avatar } from 'antd';
import { useAppSelector } from '@/store';
import { GET_SELECTOR_PHOTO } from '@/store/reducers/user';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const UserAvatar = () => {
	const photo = useAppSelector(GET_SELECTOR_PHOTO);

	return (
		<>
			<Avatar className="unctionality" alt="头像" src={photo as string} style={{ backgroundColor: '#fde3cf' }}></Avatar>

			<span className="mr5 ml5">admin</span>
		</>
	);
};

export default UserAvatar;
