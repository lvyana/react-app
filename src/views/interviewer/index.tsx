import React from 'react';
import SearchForm from './components/SearchForm';
import InterviewerInfo from './components/InterviewerInfo';

const Interviewer = () => {
	return (
		<div>
			<SearchForm></SearchForm>
			<div style={{ marginTop: '20px' }}>
				<InterviewerInfo></InterviewerInfo>
			</div>
		</div>
	);
};

export default Interviewer;
