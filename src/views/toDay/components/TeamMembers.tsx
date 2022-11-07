import { Avatar, Tooltip } from 'antd';
import React from 'react';

const TeamMembers = () => {
	const avatars = Array.from({ length: 5 }).map((item) => {
		return 'https://joeschmoe.io/api/v1/random';
	});

	return (
		<div className="my-4 p-4 border-2 border-blue-100 shadow-xl">
			{avatars.map((item, i) => {
				return (
					<Tooltip placement="bottom" title={`某某${i}`} key={i}>
						<Avatar src={item} className="mr-2 hover:border-blue-300 hover:border-2 cursor-pointer" />
					</Tooltip>
				);
			})}
			<Avatar className="cursor-pointer">+</Avatar>
		</div>
	);
};

export default TeamMembers;
