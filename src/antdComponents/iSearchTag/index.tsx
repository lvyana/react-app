/**
 * @file 搜索Tag
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC } from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

export type onChangeType = (val: string | string[]) => void;

/**
 * 搜索Tag props
 * @param selectedTags 选中数据
 * @param setSelectedTags 更新选中数据列表
 * @param multiple 多选true 否则反之
 * @param tagsData 数据列表
 * @param onChange 数据更新回调实践
 */
interface SearchTagProps {
	selectedTags: string[];
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
	multiple?: boolean;
	tagsData: string[];
	onChange?: onChangeType;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const SearchTag: FC<SearchTagProps> = ({ selectedTags, setSelectedTags, tagsData, onChange, multiple = false }) => {
	const handleChange = (tag: string, checked: boolean) => {
		let nextSelectedTags: string[] = [];

		if (multiple) {
			// 多选
			nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
		} else {
			nextSelectedTags = checked ? [tag] : [];
		}

		setSelectedTags(nextSelectedTags);

		if (onChange) {
			onChange(nextSelectedTags);
		}
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
