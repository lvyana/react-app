import { Avatar, Badge, Form, Tooltip } from 'antd';
import React, { useContext, useMemo, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { OnOkOrCancelType } from '@/components/iModal/index';
import { toDayContext } from '../../context/index';
import AddPersonnel, { FormParams } from './AddPersonnel';
import EditPersonnel from '../editPersonnel';

const TeamMembers = () => {
	const toDayContextValue = useContext(toDayContext);

	const avatars = Array.from({ length: 5 }).map((item) => {
		return 'https://joeschmoe.io/api/v1/random';
	});

	const [selectAvatar, setSelectAvatar] = useState(0);

	const onAvatar = (i: number) => {
		setSelectAvatar(i);
	};

	// 新增人员
	const [AddPersonnelForm] = Form.useForm<FormParams>();

	const [addPersonnelOpen, setAddPersonnelOpen] = useState(false);

	const [addPersonnelLoading, setAddPersonnelLoading] = useState(false);

	const addPersonnel = () => {
		setAddPersonnelOpen(true);
	};

	const onAddOkOrCancel: OnOkOrCancelType = (type) => {
		if (type === 'ok') {
			setAddPersonnelLoading(true);
			setTimeout(() => {
				setAddPersonnelLoading(false);
				setAddPersonnelOpen(false);
			}, 1000);
		} else if (type === 'cancel') {
			setAddPersonnelOpen(false);
		}
		AddPersonnelForm.resetFields();
	};

	// 调整团队
	const [editPersonnelOpen, setEditPersonnelOpen] = useState(false);

	const onEditPersonnelClose = () => {
		setEditPersonnelOpen(false);
	};

	const onEditPersonnelOpen = () => {
		setEditPersonnelOpen(true);
	};
	return (
		<Badge.Ribbon text="team" color="green">
			<div className="my-4 p-4 border-2 border-blue-100 shadow-xl">
				{avatars.map((item, i) => {
					return (
						<Tooltip placement="bottom" title={`某某${i}`} key={i}>
							<Avatar
								src={item}
								className={`${
									selectAvatar === i ? 'border-blue-400 border-2' : ''
								} mr-2 hover:border-blue-300 hover:border-2 cursor-pointer`}
								onClick={() => onAvatar(i)}
							/>
						</Tooltip>
					);
				})}
				<Avatar className="cursor-pointer mr-2 hover:bg-blue-300 " onClick={addPersonnel}>
					+
				</Avatar>
				<Avatar className="cursor-pointer  hover:bg-blue-300 " onClick={onEditPersonnelOpen}>
					<EditOutlined />
				</Avatar>
				{/* 新增人员 */}
				<AddPersonnel
					form={AddPersonnelForm}
					addPersonnelOpen={addPersonnelOpen}
					addPersonnelLoading={addPersonnelLoading}
					onOkOrCancel={onAddOkOrCancel}></AddPersonnel>

				{/* 调整团队 */}
				<EditPersonnel open={editPersonnelOpen} onClose={onEditPersonnelClose}></EditPersonnel>
			</div>
		</Badge.Ribbon>
	);
};

export default TeamMembers;
