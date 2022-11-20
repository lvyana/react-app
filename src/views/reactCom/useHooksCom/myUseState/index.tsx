import React, { useState } from 'react';
import { Button } from 'antd';

const MyUseState = () => {
	const init = 0;

	const [value, setValue] = useState(init);

	const [first, setfirst] = useState(() => init);

	const add = () => {
		setValue(value + 1);

		setfirst((value) => value + 1);
		setfirst((value) => {
			// console.log(value);

			return value + 1;
		});
		// console.log(value);
		// console.log(first);
	};
	return (
		<>
			<Button type="link" onClick={add}>
				+1
			</Button>
			{value}
			{first}
		</>
	);
};

export default MyUseState;
