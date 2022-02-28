import React, { FC, useState } from 'react';
import ILookModal from '@/components/iLookModal';

interface Iprops {
	lookRecords: boolean;
	setLookRecords: React.Dispatch<React.SetStateAction<boolean>>;
}
const InterviewRecords: FC<Iprops> = ({ lookRecords, setLookRecords }) => {
	const handleCancel = () => {
		console.log('guanbi');
		setLookRecords(false);
	};
	return (
		<ILookModal visible={lookRecords} title="查看面试记录" handleCancel={handleCancel}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</ILookModal>
	);
};

export default InterviewRecords;
