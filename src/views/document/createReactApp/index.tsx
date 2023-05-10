/**
 * @file 升级create-react-app版本以及相关依赖
 * @author ly
 * @createDate 2023年5月10日
 */
import React from 'react';
import Icard from '@/antdComponents/iCard';
import { Descriptions } from 'antd';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const CreateReactApp = () => {
	return (
		<Icard>
			<Descriptions title="我已经用create-react-app创建了一个项目,我怎么升级项目版本?" layout="vertical" bordered column={1}>
				<Descriptions.Item label="1. 首先，您需要运行以下命令来更新 create-react-app 本身：">
					npm install -g create-react-app //这将会更新全局安装的 create-react-app 版本。
				</Descriptions.Item>
				<Descriptions.Item label="2. 接下来，在您的项目根目录中运行以下命令：">
					npm install --save --save-exact react-scripts@版本号
				</Descriptions.Item>
				<Descriptions.Item label="其中， 版本号 是您想要升级到的 react-scripts 版本号。例如，如果您想要升级到 react-scripts 的最新版本，可以使用以下命令：">
					npm install --save --save-exact react-scripts@latest
				</Descriptions.Item>
				<Descriptions.Item label="3. 等待安装完成后，您需要重新启动项目以使用新的 react-scripts 版本。可以使用以下命令来启动项目：">
					npm start
				</Descriptions.Item>
				<Descriptions.Item label=" ">
					这样，您就成功升级了您的 create-react-app 项目版本。需要注意的是，升级后可能会导致一些 API
					或配置的变更，您需要进行相应的调整，请参考官方文档和升级日志，以了解不同版本之间的差异和变更。
				</Descriptions.Item>
			</Descriptions>

			<Descriptions className="mt-8" title="怎么查看create-react-app版本?" layout="vertical" bordered column={1}>
				<Descriptions.Item label="您可以在命令行中输入以下命令来查看全局安装的 create-react-app 版本：">
					create-react-app --version
				</Descriptions.Item>
				<Descriptions.Item label="如果您想查看本地项目中的 react-scripts 版本，可以在项目根目录下运行以下命令：">
					npm list react-scripts
				</Descriptions.Item>
			</Descriptions>

			<Descriptions className="mt-8" title="升级了 create-react-app 版本 其他的依赖怎么办?" layout="vertical" bordered column={1}>
				<Descriptions.Item label="您可以使用 npm-check-updates 工具来自动更新依赖项版本。可以使用以下命令全局安装这个工具：">
					npm install -g npm-check-updates
				</Descriptions.Item>
				<Descriptions.Item label="然后使用以下命令来检查并更新依赖项">ncu -u</Descriptions.Item>
				<Descriptions.Item label="重新安装依赖">npm install</Descriptions.Item>
			</Descriptions>
		</Icard>
	);
};

export default CreateReactApp;
