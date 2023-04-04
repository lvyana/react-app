/**
 * @file 上传
 * @author ly
 * @createDate 2023年1月1日
 */
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { FormItemMap } from '../type';

const { Dragger } = Upload;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const formUpload: FormItemMap['upload'] = (item) => {
	return (
		<Dragger name={item.name} multiple={item.multiple} action={item.action} headers={item.headers}>
			<p className="ant-upload-drag-icon">
				<InboxOutlined />
			</p>
			{item.children}
		</Dragger>
	);
};

export default formUpload;
