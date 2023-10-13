/**
 * @file 上传
 * @author ly
 * @createDate 2023年1月1日
 */
import React, { FC, ReactNode } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import { HttpRequestHeader } from 'antd/es/upload/interface';
import { ResponseData } from '@/api/request';

const { Dragger } = Upload;

export type Mode = 'multiple' | 'tags';

export type UploadType = {
	name: string;
	onChange?: ((info: UploadChangeParam<UploadFile<ResponseData<never>>>) => void) | undefined;
	mode?: Mode;
	style?: React.CSSProperties;
	children?: ReactNode;
	multiple?: boolean;
	action?: string;
	headers?: HttpRequestHeader;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getUpload = (item: UploadType) => {
	return (
		<Dragger name={item.name} multiple={item.multiple} action={item.action} headers={item.headers}>
			<p className="ant-upload-drag-icon">
				<InboxOutlined />
			</p>
			{item.children}
		</Dragger>
	);
};

export default getUpload;
