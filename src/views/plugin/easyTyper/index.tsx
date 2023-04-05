/**
 * @file 模板
 * @author ly
 * @createDate
 */
import React from 'react';
import useEasyTyper from '@/pluginComponents/iEasyTyper';
import Icard from '@/antdComponents/iCard';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EasyTyper = () => {
	const { output } = useEasyTyper(
		'asy-typer-js是一个轻量级的插件, 用于实现页面文字的打字机效果. 它使用起来非常简单, 只需要几行代码就能实现高大上的打字机效果.而且对MVVM框架支持完美，还兼容原生JS.'
	);
	return <Icard>{output}</Icard>;
};

export default EasyTyper;
