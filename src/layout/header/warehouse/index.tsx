/**
 * @file github、gitee仓库
 * @author ly
 * @createDate 2023年2月14日
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import gitee from '@/assets/images/gitee.png';
import github from '@/assets/images/github.png';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Warehouse = () => {
	const navigate = useNavigate();

	const onGoGitee = () => {
		const w = window.open('about:blank');
		if (w) {
			w.location.href = 'https://gitee.com/lv_yan-a/react-app';
		}
	};

	const onGoGithub = () => {
		const w = window.open('about:blank');
		if (w) {
			w.location.href = 'https://github.com/lvyana/react-app';
		}
	};

	return (
		<>
			<Button type="link" icon={<Avatar style={{ display: 'inline-table' }} src={gitee} size={16} />} onClick={onGoGitee}></Button>
			<Button type="link" icon={<Avatar style={{ display: 'inline-table' }} src={github} size={16} />} onClick={onGoGithub}></Button>
		</>
	);
};

export default Warehouse;