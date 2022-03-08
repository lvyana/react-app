import React, { useState } from 'react';
import { Button, Tag, Row, Col, Calendar } from 'antd';
import Imodal, { ImodalProps } from '@/components/iModal';
import moment, { Moment } from 'moment';
const { CheckableTag } = Tag;

const InterviewTime = () => {
	const setTime = () => {
		setVisible(true);
	};

	const [title, setTitle] = useState('可面试时间配置');
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		try {
			// 校验表单

			setConfirmLoading(true);
			setTimeout(() => {
				setConfirmLoading(false);
				setVisible(false);
			}, 2000);
		} catch (error) {}
	};

	const handleCancel = () => {
		setVisible(false);
	};
	return (
		<div style={{ marginTop: '10px' }}>
			<Button type="primary" onClick={setTime}>
				配置可面试时间
			</Button>
			<Imodal
				title={title}
				visible={visible}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}
				width="800px">
				<Row gutter={16}>
					<Col span={10}>
						<Icalendar></Icalendar>
					</Col>
					<Col span={14}>
						<DayTime></DayTime>
					</Col>
				</Row>
			</Imodal>
		</div>
	);
};

export default InterviewTime;

// 左侧日期
export const Icalendar = () => {
	function onPanelChange(value: Moment, mode: string) {
		console.log(value, mode);
	}
	const onSelect = (day: Moment) => {
		console.log(day);
	};

	const dateCellRender = (value: Moment) => {
		let isColor = moment(value).format('L') === '03/06/2022' || moment(value).format('L') === '03/05/2022';
		return isColor ? (
			<div
				style={{
					position: 'absolute',
					top: '0',
					minWidth: '24px',
					height: '24px',
					lineHeight: '24px',
					borderRadius: '2px',
					backgroundColor: 'skyblue',
					opacity: '0.3'
				}}></div>
		) : (
			<></>
		);
	};

	const disabledDay = (current: Moment) => {
		// 只能选择当前日期的两个月范围内
		console.log(current);

		return current && current < moment().subtract(1, 'days');

		// 只能选择当前日期的前后一个月范围
		// return current && (current >  moment().add(1, 'months') || current <  moment().subtract(1, 'months'));
	};

	return (
		<Calendar
			disabledDate={disabledDay}
			fullscreen={false}
			onPanelChange={onPanelChange}
			onSelect={onSelect}
			dateCellRender={dateCellRender}
		/>
	);
};

// 右侧时间
export const DayTime = () => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const handleChange = (tag: string, checked: boolean) => {
		const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
		console.log('You are interested in: ', nextSelectedTags);
		setSelectedTags(nextSelectedTags);
	};

	return (
		<>
			{weektime.map((item, i) => {
				return (
					<div key={i}>
						<div>
							<div style={{ marginBottom: '5px' }}>上午</div>
							<Row gutter={16}>
								{item.am.map((item, index) => {
									return (
										<Col span={6} key={index}>
											<CheckableTag
												checked={selectedTags.indexOf(item) > -1}
												onChange={(checked) => handleChange(item, checked)}
												key={index}
												style={{ width: '78px', border: '1px solid skyblue', marginBottom: '5px' }}>
												{item}
											</CheckableTag>
										</Col>
									);
								})}
							</Row>
						</div>
						<div>
							<div style={{ marginBottom: '5px' }}>下午</div>
							<Row gutter={16}>
								{item.pm.map((item, index) => {
									return (
										<Col span={6} key={index}>
											<CheckableTag
												checked={selectedTags.indexOf(item) > -1}
												onChange={(checked) => handleChange(item, checked)}
												key={index}
												style={{ width: '78px', border: '1px solid skyblue', marginBottom: '5px' }}>
												{item}
											</CheckableTag>
										</Col>
									);
								})}
							</Row>
						</div>
					</div>
				);
			})}
		</>
	);
};

const weektime = [
	{
		am: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00'],
		pm: [
			'12:00-12:30',
			'12:30-13:00',
			'13:00-13:30',
			'13:30-14:00',
			'14:00-14:30',
			'14:30-15:00',
			'15:00-15:30',
			'15:30-16:00',
			'16:00-16:30',
			'16:30-17:00',
			'17:00-17:30',
			'17:30-18:00',
			'18:00-18:30',
			'18:30-19:00',
			'19:00-19:30',
			'19:30-20:00'
		]
	}
];
