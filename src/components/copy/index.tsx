import React, { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

const Copy: FC<{ value: string }> = ({ value }) => {
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
