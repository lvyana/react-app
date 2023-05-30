/**
 * @file 头像
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { useAppSelector } from '@/store';
import { GET_SELECTOR_PHOTO } from '@/store/reducers/user';
import { Avatar } from 'antd';

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
