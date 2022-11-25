import React from 'react';
import TeamMembers from './TeamMembers';
import Date from './Date';

const DateAndPersonnel = () => {
	return (
		<div className="fixed w-2/5  p-2">
			<TeamMembers></TeamMembers>
			<Date></Date>
		</div>
	);
};

export default DateAndPersonnel;
