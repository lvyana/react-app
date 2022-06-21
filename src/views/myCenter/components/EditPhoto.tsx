import React, { FC, useState } from 'react';
import Photo from './Photo';
import { Avatar, Row, Col, Upload, Button } from 'antd';
import { UploadOutlined, AntDesignOutlined } from '@ant-design/icons';

interface Props {
	photoFinish: string;
	setPhotoFinish: React.Dispatch<React.SetStateAction<string>>;
}
const EditPhoto: FC<Props> = ({ photoFinish, setPhotoFinish }) => {
	// 上传图片
	const [updatepPhoto, setUpdatepPhoto] = useState(photoFinish);

	function beforeUpload(file: File) {
		getBase64(file, (base64Url) => {
			setUpdatepPhoto(base64Url as string);
		});
		return false;
	}

	return (
		<div>
			<Row gutter={20} align="bottom">
				<Col span={16}>
					<Photo updatepPhoto={updatepPhoto} setPhotoFinish={setPhotoFinish}></Photo>
				</Col>
				<Col span={8}>
					<Avatar src={photoFinish} size={200} icon={<AntDesignOutlined />} />
				</Col>
			</Row>
			<div style={{ marginTop: '10px' }}>
				<Upload name="file" showUploadList={false} beforeUpload={beforeUpload}>
					<Button icon={<UploadOutlined />}>上传头像</Button>
				</Upload>
			</div>
		</div>
	);
};

export default EditPhoto;

const getBase64 = (img: File, callback: (base64Url: string | ArrayBuffer | null) => void): void => {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));

	reader.readAsDataURL(img);
};
