import React, { FC, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { SET_PHOTO, GET_SELECTOR_PHOTO } from '@/store/reducers/user';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import EditPhoto from './components/EditPhoto';
import ResetPassword from './components/ResetPassword';
import Imodal, { OnOkOrCancelType } from '@/components/iModal';

/**
 *
 * @returns 个人中心
 */
const MyCenter: FC = () => {
	const dispatch = useAppDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const initImg = useAppSelector(GET_SELECTOR_PHOTO);

	// 修改完的图片传入
	const [photoFinish, setPhotoFinish] = useState(initImg as string);

	const openPhoto = () => {
		setPhotoFinish(initImg as string);
		setIsModalOpen(true);
	};
	const onOkOrCancel: OnOkOrCancelType = (type) => {
		if (type === 'ok') {
			handleOk();
		} else if (type === 'cancel') {
			handleCancel();
		}
	};
	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			dispatch(SET_PHOTO(photoFinish));
			setIsModalOpen(false);
			setConfirmLoading(false);
		}, 1000);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="myCenter animate__animated animate__fadeIn">
				<div style={{ marginBottom: '20px', textAlign: 'center' }}>
					<span onClick={openPhoto}>
						<Avatar src={initImg as string} size={200} icon={<AntDesignOutlined />} />
					</span>
				</div>
				<ResetPassword></ResetPassword>
			</div>
			<Imodal title="修改头像" open={isModalOpen} confirmLoading={confirmLoading} onOkOrCancel={onOkOrCancel} width={800}>
				<EditPhoto photoFinish={photoFinish} setPhotoFinish={setPhotoFinish}></EditPhoto>
			</Imodal>
		</>
	);
};

export default MyCenter;
