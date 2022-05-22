import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styles from './index.module.scss';

const Pdf = () => {
	const [numPages, setNumPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

	// 上一页
	const onPreviousPage = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		} else {
			alert('前面没有了');
		}
	};
	// 下一页
	const onNextPage = () => {
		if (pageNumber < numPages) {
			setPageNumber(pageNumber + 1);
		} else {
			alert('后面没有了');
		}
	};

	return (
		<div>
			<Document
				file={'https://malong.cn/prod-api/file/previewFile?fileRelativePath=2022/05/20/c22ab2dfae784c7995e7976d5b3f5da9.pdf'}
				onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} height={500} />
			</Document>
			<div className={styles.pdfBtn}>
				<button onClick={onPreviousPage}>上一页</button> {pageNumber} of {numPages}
				<button onClick={onNextPage}>下一页</button>
			</div>
		</div>
	);
};

export default Pdf;
// http://172.16.81.22:8018/sit-api/file/statics/2022/04/19/f1ca4003606244a0bf16a29dcf1e1a5a.pdf
