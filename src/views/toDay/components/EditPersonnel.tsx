/**
 * @name 编辑团队
 * @user ly
 * @date 2022年11月19日
 */
import React, { FC } from 'react';
import Idrawer from '@/components/iDrawer';

interface EditPersonnelProps {
	open: boolean;
	onClose: () => void;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditPersonnel: FC<EditPersonnelProps> = ({ open, onClose }) => {
	return (
		<>
			<Idrawer title="调整团队" onClose={onClose} open={open} width={800}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Idrawer>
		</>
	);
};

export default EditPersonnel;
