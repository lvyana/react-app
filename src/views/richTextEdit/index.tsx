// https://www.wangeditor.com/v5/guide/API.html#%E5%86%85%E5%AE%B9%E5%A4%84%E7%90%86
import React, { useState, useEffect } from 'react';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import {
	IDomEditor, // 编辑器实例接口
	IEditorConfig, // 编辑器配置
	IToolbarConfig // 工具栏配置
} from '@wangeditor/editor';
import ILookModal from '@/components/iLookModal';
import Preview from './components/Preview';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
const { confirm } = Modal;

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

	const [content, setContent] = useState('');
	const [visible, setVisible] = useState(false);
	const onSubmit = () => {
		console.log(editor?.children); // 节点对象
		console.log(editor?.getHtml()); //获取非格式化的 html
		let time = moment().format('YYYY-MM-DD');
		console.log(time);

		confirm({
			title: 'Do you Want to delete these items?',
			icon: <ExclamationCircleOutlined />,
			content: 'Some descriptions',
			onOk() {
				console.log('OK');
			},
			onCancel() {
				console.log('Cancel');
			}
		});
	};
	const onPreview = () => {
		console.log(editor?.getHtml());

		setContent(editor?.getHtml() as string);
		setVisible(true);
	};
	const handleCancel = () => {
		setVisible(false);
	};
	return (
		<div className="animate__animated animate__fadeIn">
			<Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" style={{ borderBottom: '1px solid #ccc' }} />
			<Editor defaultConfig={editorConfig} defaultContent={defaultContent} mode="default" style={{ height: '500px' }} />
			<div style={{ marginTop: '10px' }}>
				<Button type="primary" onClick={onSubmit} style={{ marginRight: '5px' }}>
					提交
				</Button>
				<Button type="primary" onClick={onPreview}>
					预览
				</Button>
			</div>

			<ILookModal title="预览模板" visible={visible} handleCancel={handleCancel}>
				<Preview content={content}></Preview>
			</ILookModal>
		</div>
	);
};
export default RichTextEdit;
