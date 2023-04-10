/**
 * @file 实现copy
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

/**
 * @parma value 内容
 */
interface CopyProps {
	value: string;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Copy: FC<CopyProps> = ({ value }) => {
	return (
		<span>
			<CopyToClipboard text={value} onCopy={() => message.success('复制成功~')}>
				<Button type="link" style={{ padding: '0 15px', height: 0 }}>
					<CopyOutlined />
				</Button>
			</CopyToClipboard>
		</span>
	);
};

export default Copy;
