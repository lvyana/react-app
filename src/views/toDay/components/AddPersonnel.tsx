/**
 *	@name 新增人员
 *	@user ly
 *  @data 日期：2020年11月15日
 */
import React, { FC, useState } from 'react';
import Imodal, { OnOkOrCancelType } from '@/components/iModal';

interface AddPersonnelProps {
	addPersonnelOpen: boolean;
	addPersonnelLoading: boolean;
	onOkOrCancel: OnOkOrCancelType;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const AddPersonnel: FC<AddPersonnelProps> = ({ addPersonnelOpen, addPersonnelLoading, onOkOrCancel }) => {
	return (
		<Imodal title="新增人员" open={addPersonnelOpen} confirmLoading={addPersonnelLoading} onOkOrCancel={onOkOrCancel}>
			AddPersonnel
		</Imodal>
	);
};

export default AddPersonnel;
