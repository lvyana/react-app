/**
 * 	@name 评论
 *  @user ly
 *  @data 日期：2020年11月10日
 */
import React, { FC } from 'react';
import Imodal from '@/components/iModal';

interface CommentProps {
	openComment: boolean;
	loadingComment: boolean;
	handleCancel: () => void;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Comment: FC<CommentProps> = ({ openComment, loadingComment, handleCancel }) => {
	const handleOk = () => {};

	return (
		<Imodal open={openComment} title={'评论'} confirmLoading={loadingComment} handleOk={handleOk} handleCancel={handleCancel}>
			Comment
		</Imodal>
	);
};

export default Comment;
