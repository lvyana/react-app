/**
 * @file _HTML
 * @author ly
 * @createDate 2023年3月3日
 */
import React, { FC } from 'react';

type InnerHtmlProps = {
	content: string;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const InnerHtml: FC<InnerHtmlProps> = ({ content }) => {
	return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default InnerHtml;
