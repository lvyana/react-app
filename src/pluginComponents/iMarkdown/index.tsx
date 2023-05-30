/**
 * @file 模板
 * @author ly
 * @createDate
 */
import useThemeHooks from '@/config/antd/theme/useThemeHooks';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import style from './index.module.scss';

type ImarkdownProps = {
	url?: string;
	initContent?: string;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Imarkdown: FC<ImarkdownProps> = ({ url = '', initContent = '' }) => {
	const [content, setContent] = useState(initContent);

	useEffect(() => {
		if (url) {
			getContent();
		}
	}, []);

	const getContent = () => {
		try {
			import('./module/' + url).then((res) => {
				fetch(res.default)
					.then((res) => {
						return res.text();
					})
					.then((text) => {
						setContent(text);
					});
			});
		} catch (error) {}
	};

	const { token } = useThemeHooks();

	useEffect(() => {
		console.log(document.querySelector('pre'));

		document.querySelector('pre')?.style.setProperty('background-color', token.colorBgBase);
	}, []);

	return (
		<div>
			<ReactMarkdown
				className={style.codeStyle}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '');
						return !inline && match ? (
							<SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={dark}>
								{String(children).replace(/\n$/, '')}
							</SyntaxHighlighter>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					}
				}}>
				{content}
			</ReactMarkdown>
		</div>
	);
};
export default Imarkdown;
