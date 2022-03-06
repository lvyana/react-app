// https://www.wangeditor.com/v5/guide/API.html#%E5%86%85%E5%AE%B9%E5%A4%84%E7%90%86
import React, { useState, useEffect } from 'react';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import {
	IDomEditor, // 编辑器实例接口
	IEditorConfig, // 编辑器配置
	IToolbarConfig // 工具栏配置
} from '@wangeditor/editor';
import { Button } from 'antd';

export interface ISingleMenuConfig {
	[key: string]: any;
}
export interface IMenuConfig {
	[key: string]: ISingleMenuConfig;
}

const RichTextEdit = () => {
	const [editor, setEditor] = useState<IDomEditor | null>(null); // 存储 editor 实例
	const defaultContent = [{ type: 'paragraph', children: [{ text: '一行文字' }] }];
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
		console.log(editor);

		return () => {
			if (editor == null) return;
			editor.destroy();
			setEditor(null);
		};
	}, [editor]);

	const submit = () => {
		console.log(editor?.children); // 节点对象
		console.log(editor?.getHtml()); //获取非格式化的 html
	};
	return (
		<div className="animate__animated animate__fadeIn" style={{ border: '1px solid #ccc', zIndex: 100 }}>
			<Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" style={{ borderBottom: '1px solid #ccc' }} />
			<Editor defaultConfig={editorConfig} defaultContent={defaultContent} mode="default" style={{ height: '500px' }} />
			<Button type="primary" onClick={submit}>
				提交
			</Button>
		</div>
	);
};
export default RichTextEdit;
