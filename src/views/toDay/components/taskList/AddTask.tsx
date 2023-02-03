/**
 * @file 新增任务
 * @author ly
 * @createDate 2022年12月3日
 */
import React, { useState } from 'react';
import { FloatButton } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import Imodal from '@/antdComponents/iModal';
import type { OnOkOrCancelType } from '@/antdComponents/iModal';

const AddTask = () => {
	const onOpenTask = () => {
		setAddTaskOpen(true);
	};
	// taskt弹框
	const [addTaskOpen, setAddTaskOpen] = useState(false);

	const [addTaskLoading, setAddTaskLoading] = useState(false);

	const onOkOrCancelTask: OnOkOrCancelType = (type) => {
		// if (type === 'ok') {
		// }
		setAddTaskOpen(false);
	};
	return (
		<div>
			<FloatButton icon={<AppstoreAddOutlined />} onClick={onOpenTask}></FloatButton>
			<Imodal title="新增任务" open={addTaskOpen} confirmLoading={addTaskLoading} onOkOrCancel={onOkOrCancelTask}>
				123
			</Imodal>
		</div>
	);
};

const TaskContent = () => {};
export default AddTask;
