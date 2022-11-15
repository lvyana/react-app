import { Avatar, Tooltip } from 'antd';
import React, { useContext, useMemo, useState } from 'react';
import { OnOkOrCancelType } from '@/components/iModal/index';
import { toDayContext } from '../context/index';
import AddPersonnel from './AddPersonnel';

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
	const [addPersonnelOpen, setAddPersonnelOpen] = useState(false);

	const [addPersonnelLoading, setAddPersonnelLoading] = useState(false);

	const addPersonnel = () => {
		setAddPersonnelOpen(true);
	};

	const onOkOrCancel: OnOkOrCancelType = (type) => {
		if (type === 'ok') {
			setAddPersonnelOpen(false);
		} else if (type === 'cancel') {
			setAddPersonnelOpen(false);
		}
	};

	return (
		<div className="my-4 p-4 border-2 border-blue-100 shadow-xl">
			{avatars.map((item, i) => {
				return (
					<Tooltip placement="bottom" title={`某某${i}`} key={i}>
						<Avatar
							src={item}
							className={`${selectAvatar === i ? 'border-blue-400 border-2' : ''} mr-2 hover:border-blue-300 hover:border-2 cursor-pointer`}
							onClick={() => onAvatar(i)}
						/>
					</Tooltip>
				);
			})}
			<Avatar className="cursor-pointer" onClick={addPersonnel}>
				+
			</Avatar>
			<AddPersonnel
				addPersonnelOpen={addPersonnelOpen}
				addPersonnelLoading={addPersonnelLoading}
				onOkOrCancel={onOkOrCancel}></AddPersonnel>
		</div>
	);
};

export default TeamMembers;
