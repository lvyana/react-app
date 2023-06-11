/**
 * @file 配置布局
 * @author ly
 * @createDate 2023年6月11日
 */
import React, { FC } from 'react';
import { Button, Drawer, FloatButton, Space } from 'antd';
import IconFont from '@/utils/iconfont';
import StyleLayout from './StyleLayout';

type ConfigLayoutProps = {
	open: boolean;
	onOpen: () => void;
	onClose: () => void;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ConfigLayout: FC<ConfigLayoutProps> = ({ open, onOpen, onClose }) => {
	return (
		<>
			<FloatButton onClick={onOpen} icon={<IconFont type="icon-shezhi"></IconFont>} />
			<Drawer
				title="设置布局"
				closable={false}
				onClose={onClose}
				placement="right"
				open={open}
				footer={
					<div className="flex justify-end">
						<Space>
							<Button onClick={onClose}>Cancel</Button>
							<Button type="primary" onClick={onClose}>
								OK
							</Button>
						</Space>
					</div>
				}>
				<StyleLayout></StyleLayout>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	);
};

export default ConfigLayout;
