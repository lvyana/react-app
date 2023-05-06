/**
 * @file Volta node、npm、yarn包版本管理
 * @author ly
 * @createDate
 */
import React from 'react';
import Icard from '@/antdComponents/iCard';
import { Button, List } from 'antd';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Volta = () => {
	const size = useAppSelector(GET_SIZE);
	const listSize = () => {
		if (size === 'middle' || size === undefined) {
			return 'default';
		}
		return size;
	};

	const data = [
		'volta list //查看当前环境的版本',
		'volta list all //查看存在的所有版本',
		'volta install node //安装最新版的nodejs',
		'volta install node@12.2.0 //安装指定版本',
		'volta install node@12 //volta将选择合适的版本安装',
		'volta pin node@10.15 //将更新项目的package.json文件以使用工具的选定版本',
		'volta pin yarn@1.14 //将更新项目的package.json文件以使用工具的选定版本'
	];
	return (
		<Icard>
			Volta官网: <Button type="link">https://docs.volta.sh/reference/install</Button>
			<br />
			Volta安装包: <Button type="link">https://github.com/volta-cli/volta/releases/download/v1.0.6/volta-1.0.6-windows-x86_64.msi</Button>
			<div>
				技巧: volta install 安装tools时与网络有关系，有时会死活下载不下来（主要应该是国内网络环境的原因），可以将自己手动下载的压缩包，
				比如将node-v12.18.2-win-x64.zip复制到C:AppDataLocalVolta\toolsinventory\node目录下，然后再重新执行install命令
				<br />
				volta命令无法识别需要用管理员打开cmd或者vscode
			</div>
			node zip下载地址:{' '}
			<Button type="link">https://registry.npmmirror.com/binary.html?path=node/&spm=a2c6h.24755359.0.0.6d444dcc62cHyq</Button>
			<List
				size={listSize()}
				header={<div>Volta常用的命令</div>}
				bordered
				dataSource={data}
				renderItem={(item) => <List.Item>{item}</List.Item>}
			/>
		</Icard>
	);
};

export default Volta;
