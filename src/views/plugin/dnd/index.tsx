/**
 * @name react-dnd
 * @user ly
 * @date 2022年12月17日
 */
import React from 'react';
import { Col, Row } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ExamplesList from './ExamplesList';
import GenerateForm from './GenerateForm';
import EditForm from './EditForm';
import DndContext from './context';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Dnd = () => {
	return (
		<DndContext>
			<Row gutter={8}>
				<DndProvider backend={HTML5Backend}>
					<Col span={6}>
						<ExamplesList />
					</Col>
					<Col span={12}>
						<GenerateForm />
					</Col>
				</DndProvider>
				<Col span={6}>
					<EditForm />
				</Col>
			</Row>
		</DndContext>
	);
};

export default Dnd;
