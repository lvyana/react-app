/**
 * @name 编辑团队
 * @user ly
 * @date 2022年11月19日
 */
import React, { FC } from 'react';
import Idrawer from '@/antdComponents/iDrawer';
import EditPersonnelTable from './EditPersonnelTable';
interface EditPersonnelProps {
	open: boolean;
	onClose: () => void;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditPersonnel: FC<EditPersonnelProps> = ({ open, onClose }) => {
	return (
		<>
			<Idrawer title="调整团队" onClose={onClose} open={open} width={800}>
				<EditPersonnelTable></EditPersonnelTable>
			</Idrawer>
		</>
	);
};

export default EditPersonnel;
