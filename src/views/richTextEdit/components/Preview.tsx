import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
interface Iprops {
	content: string;
}
const Preview: FC<Iprops> = ({ content }) => {
	return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default Preview;
