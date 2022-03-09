import React, { FC } from 'react';

/**
 * btMulti
 * option 展示字段
 * style 展示字段的样式
 */
interface Iprops {
	option: string[];
	style?: object[];
}

const Multi: FC<Iprops> = ({ option, style }) => {
	return (
		<div>
			{option?.map((item, i) => {
				return (
					<div key={i} style={style && style[i]}>
						{item}
					</div>
				);
			})}
		</div>
	);
};

export default Multi;
