import React, { FC } from 'react';
import { ItbClick } from '@/components/iTable';

export type InameList = (string | number)[];

/**
 * tbPost
 * type 定义事件类型
 * nameList 展示的数据集合
 * tbClick 表格事件
 * record 表格某一条数据
 */
interface Iprops {
	type: string;
	nameList: InameList;
	record: object;
	tbClick?: ItbClick;
}

const Post: FC<Iprops> = ({ type, nameList, record, tbClick }) => {
	return (
		<div style={{ width: '200px' }}>
			<span onClick={() => tbClick && tbClick(type, record)} className="omit">
				{(nameList[0] ? nameList[0] : '') + (nameList[0] && nameList[1] ? ' · ' : '') + (nameList[1] ? nameList[1] + ' ' : '')}
			</span>
			<div className="omit">
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
