/**
 * @file 代码编辑器
 * @author ly
 * @createDate
 */
import React, { FC, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

type IcodeEditorProps = {
	initCode: string;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IcodeEditor: FC<IcodeEditorProps> = ({ initCode = `function add(a, b) {\n  return a + b;\n}` }) => {
	const [code, setCode] = useState(initCode);

	return (
		<Editor
			value={code}
			onValueChange={(code) => setCode(code)}
			highlight={(code) => highlight(code, languages.js, 'jsx')}
			padding={10}
			style={{
				// fontFamily: '"Fira code", "Fira Mono", monospace',
				fontSize: 14
			}}
			readOnly={true}
			disabled={true}
		/>
	);
};

export default IcodeEditor;
