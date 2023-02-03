/**
 * @file 富文本编辑器 https://www.wangeditor.com/v5/guide/API.html#%E5%86%85%E5%AE%B9%E5%A4%84%E7%90%86
 * @author ly
 * @createDate 2022年4月3日
 */

import React, { useState, useEffect } from 'react';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import {
	IDomEditor, // 编辑器实例接口
	IEditorConfig, // 编辑器配置
	IToolbarConfig // 工具栏配置
} from '@wangeditor/editor';
import ILookModal from '@/antdComponents/iLookModal';
import Preview from './components/Preview';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
const { confirm } = Modal;

export interface ISingleMenuConfig {
	server: string;
}
export interface IMenuConfig {
	uploadImage?: ISingleMenuConfig;
}

const RichTextEdit = () => {
	const [editor, setEditor] = useState<IDomEditor | null>(null); // 存储 editor 实例
	const defaultHtml = `<h2>针对目前前端中台项目优化方案</h2><h3>1、代码管理&nbsp;git&nbsp;分支管理&nbsp;版本分支&nbsp;&nbsp;上线流程</h3><p><img src="https://project-1308388249.cos.ap-guangzhou.myqcloud.com/git.png" alt="git" data-href="https://project-1308388249.cos.ap-guangzhou.myqcloud.com/git.png" style="width: 785.00px;height: 622.20px;"/></p><h3>2、项目优化&nbsp;页面加载慢&nbsp;组件体验不好&nbsp;文件管理&nbsp;数据管理&nbsp;</h3><p>2.1、页面加载&nbsp;webpack打包优化，减少代码体积、静态文件放到cdn、路由懒加载、预加载</p><p>2.2、组件体验&nbsp;交互效果、组件性能调整</p><p>2.3、文件管理&nbsp;约定好文件名字、文件目录结构</p><p>2.4、针对项目使用较多的幂等数据存放vuex状态管理、较多的接口用mixin进行封装</p><h3>3、组件优化&nbsp;公共组件&nbsp;</h3><p>3.1、公共组件封装要减少使用负担</p><p>3.2、考虑公共组件封装使用场景，不必追求封装而封装</p><h3>4、代码优化</h3>`;
	const toolbarConfig = {};
	const editorConfig: Partial<IEditorConfig> = {
		placeholder: '请输入内容...',
		onCreated(editor: IDomEditor) {
			setEditor(editor);
		}, // 记录下 editor 实例，重要！
		MENU_CONF: {}
	};

	// 上传图片
	(editorConfig.MENU_CONF as IMenuConfig)['uploadImage'] = {
		server: '/api/upload'
	};

	// 及时销毁 editor ，重要！
	useEffect(() => {
		return () => {
			if (editor === null) return;
			editor.destroy();
			setEditor(null);
		};
	}, [editor]);

	const [content, setContent] = useState('');
	const [open, setOpen] = useState(false);
	const onSubmit = () => {
		// console.log(editor?.children); // 节点对象
		// console.log(editor?.getHtml()); //获取非格式化的 html
		let time = dayjs().format('YYYY-MM-DD');
		// console.log(time);

		confirm({
			title: 'Do you Want to delete these items?',
			icon: <ExclamationCircleOutlined />,
			content: 'Some descriptions',
			onOk() {},
			onCancel() {}
		});
	};
	const onPreview = () => {
		setContent(editor?.getHtml() as string);
		setOpen(true);
	};
	const handleCancel = () => {
		setOpen(false);
	};
	return (
		<div className="animate__animated animate__fadeIn">
			<Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" style={{ borderBottom: '1px solid #ccc' }} />
			<Editor defaultConfig={editorConfig} defaultHtml={defaultHtml} mode="default" style={{ height: '500px' }} />
			<div className="mt-2">
				<Button type="primary" onClick={onSubmit} style={{ marginRight: '5px' }}>
					提交
				</Button>
				<Button type="primary" onClick={onPreview}>
					预览
				</Button>
			</div>

			<ILookModal title="预览模板" width="1000px" open={open} handleCancel={handleCancel}>
				<Preview content={content}></Preview>
			</ILookModal>
		</div>
	);
};
export default RichTextEdit;
