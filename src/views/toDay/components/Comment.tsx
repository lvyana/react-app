/**
 * 	@name 评论
 *  @user ly
 *  @data 日期：2020年11月10日
 */
import React, { FC } from 'react';
import Imodal, { OnOkOrCancelType } from '@/components/iModal';

interface CommentProps {
	openComment: boolean;
	loadingComment: boolean;
	onOkOrCancel: OnOkOrCancelType;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Comment: FC<CommentProps> = ({ openComment, loadingComment, onOkOrCancel }) => {
	return (
		<Imodal open={openComment} title={'评论'} confirmLoading={loadingComment} onOkOrCancel={onOkOrCancel}>
			Comment
		</Imodal>
	);
};

export default Comment;
