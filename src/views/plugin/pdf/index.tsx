/**
 * @file pdf
 * @author ly
 * @createDate 2022年6月3日
 * https://www.5axxw.com/wiki/content/n0gokf 文档说明
 */
import React, { useState, useEffect, useRef } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Icard from '@/antdComponents/iCard';
import styles from './index.module.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Iloading from '@/antdComponents/iLoading';
import { Button } from 'antd';
import useResize from '@/useHooks/useResize';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
	//阻止右键默认事件(禁止下载)
	const onPreventDefault = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
	};

	// 动态获取width
	const { resize } = useResize(document.getElementById('pdfCard'));

	return (
		<Icard>
			<div id="pdfCard" className={styles.pdf} onContextMenu={(e) => onPreventDefault(e)}>
				<Document
					className={'w-full'}
					file={'https://cdn-file-1308388249.cos.ap-nanjing.myqcloud.com/pdf.pdf'}
					onLoadSuccess={onDocumentLoadSuccess}
					loading={<Iloading></Iloading>}>
					<Page pageNumber={pageNumber} width={resize?.width} />
				</Document>
				<div className={styles.pdfBtn}>
					<Button type="link" onClick={onPreviousPage}>
						上一页
					</Button>{' '}
					{pageNumber} of {numPages}
					<Button type="link" onClick={onNextPage}>
						下一页
					</Button>
				</div>
			</div>
		</Icard>
	);
};

export default Pdf;

// http://172.16.81.22:8018/sit-api/file/statics/2022/04/19/f1ca4003606244a0bf16a29dcf1e1a5a.pdf
