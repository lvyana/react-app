import React, { FC, useState } from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

export type onChangeType = (val: string | string[]) => void;
/**
 * SearchTag
 * selectedTags 选中数据
 * setSelectedTags 更新选中数据列表
 * multiple 多选true 否则反之
 * tagsData 数据列表
 * onChange 数据更新回调实践
 */
interface IpropsTag {
	selectedTags: string[];
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
	multiple?: boolean;
	tagsData: string[];
	onChange?: onChangeType;
}
const SearchTag: FC<IpropsTag> = ({ selectedTags, setSelectedTags, tagsData, onChange, multiple = false }) => {
	const handleChange = (tag: string, checked: boolean) => {
		let nextSelectedTags: string[] = [];

		if (multiple) {
			// 多选
			nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
			console.log('You are interested in: ', nextSelectedTags);
		} else {
			nextSelectedTags = checked ? [tag] : [];
		}

		setSelectedTags(nextSelectedTags);
		onChange && onChange(nextSelectedTags);
	};
	return (
		<div style={{ marginBottom: '10px', marginLeft: '50px' }}>
			<span style={{ marginRight: 8, color: '#ccc' }}>快速搜索:</span>
			{tagsData.map((tag) => (
				<CheckableTag
					style={{ fontSize: '14px' }}
					key={tag}
					checked={selectedTags.indexOf(tag) > -1}
					onChange={(checked) => handleChange(tag, checked)}>
					{tag}
				</CheckableTag>
			))}
		</div>
	);
};

export default SearchTag;
