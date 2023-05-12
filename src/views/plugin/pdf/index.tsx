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
import useResize from '@/useHooks/useResize';
import pdffile from './title.pdf';
import Ipaginations from '@/antdComponents/iPagination';
import { useDebounce } from 'ahooks';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = () => {
	const page = useRef({ pageNum: 1, pageSize: 1 });
	const [total, setTotal] = useState(1);
	const [update, setUpdate] = useState(0);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setTotal(numPages);
	};

	const onPaginationChange = () => {
		setUpdate(update + 1);
	};

	//阻止右键默认事件(禁止下载)
	const onPreventDefault = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
	};

	// 动态获取width
	const { resize } = useResize(document.getElementById('pdfCard'));
	const resizeDebounce = useDebounce(resize, { wait: 500 });

	return (
		<Icard>
			<div id="pdfCard" className={styles.pdf} onContextMenu={(e) => onPreventDefault(e)}>
				<Document className={'w-full'} file={pdffile} onLoadSuccess={onDocumentLoadSuccess} loading={<Iloading></Iloading>}>
					<Page pageNumber={page.current.pageNum} width={resizeDebounce?.width} />
				</Document>
			</div>
			<div>
				<Ipaginations
					page={page}
					onPaginationChange={onPaginationChange}
					total={total}
					showTotal={false}
					showSizeChanger={false}
					showQuickJumper={false}
					className="mt-4"></Ipaginations>
			</div>
		</Icard>
	);
};

export default Pdf;

// http://172.16.81.22:8018/sit-api/file/statics/2022/04/19/f1ca4003606244a0bf16a29dcf1e1a5a.pdf
