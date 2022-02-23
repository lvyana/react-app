import React from 'react';

type InameList = (string | number)[];

interface Iprops {
	name: string;
	nameList: InameList;
	goDrawer: (name: string, nameList: InameList) => void;
}

const Post = ({ name, nameList, goDrawer }: Iprops) => {
	return (
		<div>
			<span onClick={() => goDrawer(name, nameList)}>
				{(nameList[0] ? nameList[0] : '') + (nameList[0] && nameList[1] ? ' - ' : '') + (nameList[1] ? nameList[1] + ' ' : '')}
			</span>
			<div>
				{nameList[2] ? nameList[2] : ''}
				{nameList[2] && ((nameList[3] && nameList[4]) || nameList[5]) ? ' · ' : ''}
				{nameList[3] == nameList[4]
					? nameList[3]
					: (nameList[3] ? nameList[3] : '') + (nameList[3] && nameList[4] ? ' - ' : '') + (nameList[4] ? nameList[4] : '')}
				{nameList[3] && nameList[4] && nameList[5] ? ' · ' : ''}
				{nameList[5]}
			</div>
		</div>
	);
};

export default Post;
