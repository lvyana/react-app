import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { Row, Col } from 'antd';

interface Iprops {
	content: string;
}
const Preview: FC<Iprops> = ({ content }) => {
	return (
		<Row>
			<Col span={12}>
				<div dangerouslySetInnerHTML={{ __html: content }}></div>
			</Col>
			<Col span={12}>
				<div>{content}</div>
			</Col>
		</Row>
	);
};

export default Preview;
