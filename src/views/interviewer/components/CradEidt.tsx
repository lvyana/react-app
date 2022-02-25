import React, { FC, useState } from 'react';
import Imodal, { ImodalProps } from '@/components/iModal';

// 邀约下轮面试
export const CradEidt: FC<ImodalProps> = ({ title, visible, confirmLoading, handleOk, handleCancel }) => {
	return (
		<div>
			<Imodal title={title} visible={visible} confirmLoading={confirmLoading} handleOk={handleOk} handleCancel={handleCancel}>
				{title}
			</Imodal>
		</div>
	);
};
