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
/**
 * 上传props
 * @param name 发到后台的文件参数名
 * @method onChange 上传文件改变时的回调，上传每个阶段都会触发该事件
 * @param style 样式
 * @param children 文本内容
 * @param multiple 是否支持多选文件
 * @param action	上传的地址
 * @param headers 设置上传的请求头部
 */
export type UploadType = {
	name: string;
	onChange?: ((info: UploadChangeParam<UploadFile<ResponseData<never>>>) => void) | undefined;
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
