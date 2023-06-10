/**
 * @file 模板
 * @author markdown语法
 * @createDate
 */
import React from 'react';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Markdown = () => {
	const list = [
		{
			label: '标题',
			children: (
				<div>
					# 这是一级标题
					<br />
					## 这是二级标题 <br />
					### 这是三级标题 <br />
					#### 这是四级标题 <br />
					##### 这是五级标题 <br />
					###### 这是六级标题
					<br />
					tips: 注意：标准的 Markdown 语法中 # 后面没有空格，但在「 语雀」中需要加空格才能识别。
				</div>
			),

			key: '1'
		},
		{
			label: '字体',
			children: (
				<div>
					**这是加粗的文字**
					<br />
					*这是倾斜的文字*
					<br />
					***这是斜体加粗的文字***
					<br />
					~~这是加删除线的文字~~
					<br />
					tips: 注意：* 和 ~ 后没有空格
				</div>
			),
			key: '2'
		},
		{
			label: '引用',
			children: (
				<div>
					{`>`}这是引用的内容
					<br />
					{`>>`}这是引用的内容
					<br />
					{`>>>`}这是引用的内容
					<br />
					tips: 注意：标准的 Markdown 语法中{`>`} 后面没有空格，但在「 语雀」中需要加空格才能识别。
				</div>
			),
			key: '3'
		},
		{
			label: '分割线',
			children: (
				<div>
					---
					<br />
					----
					<br />
					***
					<br />
					*****
					<br />
					tips: 三个或者三个以上的 - 或者 * 都可以。以上四种写法显示效果都一样。
				</div>
			),
			key: '4'
		},
		{
			label: '图片',
			children: (
				<div>
					{`![图片alt](图片地址 ''图片title'')`}
					<br />
					图片alt就是显示在图片下面的文字,相当于对图片内容的解释。
					<br />
					图片title是图片的标题,当鼠标移到图片上时显示的内容。title可加可不加
					<br />
				</div>
			),
			key: '5'
		},
		{
			label: '超链接',
			children: (
				<div>
					演示地址: [http://114.132.242.253](http://114.132.242.253)
					{`[超链接名](超链接地址 "超链接title")`}
					<br />
					title可加可不加
					<br />
					tips: 注意：标准的 Markdown 语法中 [] 以及 () 都是英文符号，且上述符号与文件间没有空格。
				</div>
			),
			key: '6'
		},
		{
			label: '无序列表',
			children: (
				<div>
					- 列表内容 <br />
					+ 列表内容 <br />
					* 列表内容 <br />
					tips: 注意：- + * 跟内容之间都要有一个空格
					<br />
				</div>
			),
			key: '7'
		},
		{
			label: '有序列表',
			children: (
				<div>
					1.列表内容
					<br />
					2.列表内容
					<br />
					3.列表内容
					<br />
					tips: 注意：序号跟内容之间要有空格
					<br />
				</div>
			),
			key: '8'
		},
		{
			label: '嵌套列表',
			children: (
				<div>
					上一级与下一级之间敲三个空格即可。
					<br />
					● 一级标题
					<br /> ○ 二级标题
					<br /> ○ 二级标题 <br />
					● 一级标题
					<br /> ○ 二级标题
					<br />■ 三级标题
					<br />1 一级标题
					<br /> a 二级标题
					<br /> b 二级标题
					<br />i 三级标题
					<br />
					ii 三级标题
					<br />
				</div>
			),
			key: '9'
		},
		{
			label: '表格',
			children: (
				<div>
					表头|表头|表头 <br />
					---|:--:|---: <br />
					内容|内容|内容 <br />
					内容|内容|内容 <br />
					第二行分割表头和内容。 <br />
					- 有一个就行，为了对齐，多加了几个 <br />
					文字默认居左 <br />
					-两边加：表示文字居中 <br />
					-右边加：表示文字居右 <br />
					注：原生的语法两边都要用 | 包起来。此处省略
					<br />
				</div>
			),
			key: '10'
		},
		{
			label: '代码',
			children: (
				<div>
					单行代码：代码之间分别用一个反引号包起来
					<br />
					{'`代码内容`'}
					<br />
					代码块：代码之间分别用三个反引号抱起来，且两边的反引号单独占一行
					<br />
					```
					<br />
					代码...
					<br />
					代码...
					<br />
					代码...
					<br />
					```
					<br />
				</div>
			),
			key: '11'
		}
	];
	return (
		<Icard>
			<Icollapse list={list} defaultActiveKey={['1']} styleConfig="1"></Icollapse>
		</Icard>
	);
};

export default Markdown;
