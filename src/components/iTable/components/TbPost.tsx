import React, { FC } from 'react';
import styles from '@/styles/index.module.scss';
export type InameList = (string | number)[];

interface Iprops {
	name: string;
	nameList: InameList;
	tbClick?: (name: string, nameList: InameList) => void;
}

const Post: FC<Iprops> = ({ name, nameList, tbClick }) => {
	return (
		<div style={{ width: '200px' }}>
			<span onClick={() => tbClick && tbClick(name, nameList)} className={styles.omit}>
				{(nameList[0] ? nameList[0] : '') + (nameList[0] && nameList[1] ? ' · ' : '') + (nameList[1] ? nameList[1] + ' ' : '')}
			</span>
			<div className={styles.omit}>
				{nameList[2] ? nameList[2] : ''}
				{nameList[2] && ((nameList[3] && nameList[4]) || nameList[5]) ? ' · ' : ''}
				{nameList[3] == nameList[4]
					? nameList[3]
					: (nameList[3] ? nameList[3] : '') + (nameList[3] && nameList[4] ? ' · ' : '') + (nameList[4] ? nameList[4] : '')}
				{nameList[3] && nameList[4] && nameList[5] ? ' · ' : ''}
				{nameList[5] ? nameList[5] : ''}
			</div>
		</div>
	);
};

export default Post;

export const PostTitle = ({ nameList }: { nameList: InameList }) => {
	return (
		<div>
			<span>
				{(nameList[0] ? nameList[0] : '') + (nameList[0] && nameList[1] ? ' · ' : '') + (nameList[1] ? nameList[1] + ' ' : '')}
			</span>
			<div>
				{nameList[2] ? nameList[2] : ''}
				{nameList[2] && ((nameList[3] && nameList[4]) || nameList[5]) ? ' · ' : ''}
				{nameList[3] == nameList[4]
					? nameList[3]
					: (nameList[3] ? nameList[3] : '') + (nameList[3] && nameList[4] ? ' · ' : '') + (nameList[4] ? nameList[4] : '')}
				{nameList[3] && nameList[4] && nameList[5] ? ' · ' : ''}
				{nameList[5] ? nameList[5] : ''}
			</div>
		</div>
	);
};
