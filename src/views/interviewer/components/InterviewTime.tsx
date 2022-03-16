import React, { FC, useState, useEffect } from 'react';
import { Button, Tag, Row, Col, Calendar, Checkbox } from 'antd';
import Imodal, { ImodalProps } from '@/components/iModal';
import moment, { Moment } from 'moment';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
const { CheckableTag } = Tag;

export interface IselectedAllTagsType {
	day: string;
	tags: string[];
}
const InterviewTime = () => {
	// 全部选中数据
	const [selectedAllTags, setSelectedAllTags] = useState<IselectedAllTagsType[]>([
		{
			day: '2022-03-16',
			tags: ['12:00-12:30', '12:30-13:00', '13:00-13:30']
		},
		{
			day: '2022-03-17',
			tags: ['12:00-12:30', '12:30-13:00']
		}
	]);
	const setTime = () => {
		setVisible(true);
	};

	const [title, setTitle] = useState('可面试时间配置');
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		try {
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
		<div>
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
				<TimeCenter selectedAllTags={selectedAllTags} setSelectedAllTags={setSelectedAllTags}></TimeCenter>
			</Imodal>
		</div>
	);
};

export default InterviewTime;

interface ItimeCenterrProps {
	selectedAllTags: IselectedAllTagsType[];
	setSelectedAllTags: React.Dispatch<React.SetStateAction<IselectedAllTagsType[]>>;
}
export const TimeCenter: FC<ItimeCenterrProps> = ({ selectedAllTags, setSelectedAllTags }) => {
	// 那些天有数据
	const [hasTagsDay, setHasTagsDay] = useState<string[]>([]);
	// 某一天 默认当天
	const [day, setDay] = useState(moment().format('YYYY-MM-DD'));
	// 某一天选中数据
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	// 监听左侧时间的变化
	useEffect(() => {
		console.log(day, getDatcheckTag());
		let selectedArr = getDatcheckTag() || [];
		setSelectedTags(selectedArr);
	}, []);
	useEffect(() => {
		let selectedArr = getDatcheckTag() || [];
		setSelectedTags(selectedArr);
	}, [day]);

	// 获取day那一天的选中数据
	const getDatcheckTag = () => {
		let selectedAllTag = selectedAllTags.find((item) => {
			return item.day === day;
		});
		return selectedAllTag?.tags;
	};

	// 操作右侧时间tag 进行保存到selectedAllTags
	useEffect(() => {
		// 判断selectedAllTags的数据有没有选中的那一天
		let selectedAllTag: IselectedAllTagsType[] = [];
		if (hasTagsDay.indexOf(day) > -1) {
			selectedAllTag = selectedAllTags.map((item) => {
				if (item.day === day) {
					return { day: item.day, tags: selectedTags };
				} else {
					return { day: item.day, tags: item.tags };
				}
			});
		} else {
			if (selectedTags.length === 0) {
				selectedAllTag = [...selectedAllTags];
			} else {
				selectedAllTag = [...selectedAllTags, { day, tags: selectedTags }];
			}
		}

		setSelectedAllTags(selectedAllTag);
	}, [selectedTags]);

	// 监听selectedAllTags 获取所有有数据的天数
	useEffect(() => {
		// 获取selectedAllTags所有天数
		let hasTagsDay = selectedAllTags.filter((item) => {
			return item.tags.length !== 0;
		});
		console.log(hasTagsDay, selectedAllTags);

		let dayArr = hasTagsDay.map((item) => {
			return item.day;
		});
		console.log(dayArr, '123');

		setHasTagsDay(dayArr);
	}, [selectedAllTags]);

	return (
		<Row gutter={16}>
			<Col span={10}>
				<Icalendar day={day} setDay={setDay} hasTagsDay={hasTagsDay}></Icalendar>
			</Col>
			<Col span={14}>
				<DayTime selectedTags={selectedTags} setSelectedTags={setSelectedTags}></DayTime>
			</Col>
		</Row>
	);
};
// 左侧日期
interface IicalendarProps {
	day?: string;
	setDay?: React.Dispatch<React.SetStateAction<string>>;
	hasTagsDay: string[];
}
export const Icalendar: FC<IicalendarProps> = ({ day, setDay, hasTagsDay }) => {
	function onPanelChange(value: Moment, mode: string) {
		console.log(value, mode);
	}
	const onSelect = (day: Moment) => {
		console.log(day);
		setDay && setDay(moment(day).format('YYYY-MM-DD'));
	};

	const dateCellRender = (value: Moment) => {
		let isColor = hasTagsDay.indexOf(moment(value).format('YYYY-MM-DD')) > -1;
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
		return current && current < moment().subtract(1, 'days');

		// 只能选择当前日期的前后一个月范围
		// return current && (current >  moment().add(1, 'months') || current <  moment().subtract(1, 'months'));
	};

	return (
		<Calendar
			value={moment(day)}
			disabledDate={disabledDay}
			fullscreen={false}
			onPanelChange={onPanelChange}
			onSelect={onSelect}
			dateCellRender={dateCellRender}
		/>
	);
};

// 右侧时间
interface IdayTimeProps {
	selectedTags: string[];
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}
export const DayTime: FC<IdayTimeProps> = ({ selectedTags, setSelectedTags }) => {
	const handleChange = (tag: string, checked: boolean) => {
		const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
		console.log('You are interested in: ', nextSelectedTags);
		setSelectedTags(nextSelectedTags);
	};

	const onCheckChange = (type: string, e: CheckboxChangeEvent) => {
		console.log(type, `checked = ${e.target.checked}`);
		if (e.target.checked === true) {
			// 选中
			if (type === '上午') {
				let amAll = [...new Set([...selectedTags, ...weektime.am])];
				console.log(amAll);
				setSelectedTags(amAll);
			} else if (type === '下午') {
				let pmAll = [...new Set([...selectedTags, ...weektime.pm])];
				console.log(pmAll);
				setSelectedTags(pmAll);
			}
		} else {
			if (type === '上午') {
				let amClear = selectedTags.filter((item) => {
					return weektime.am.indexOf(item) === -1;
				});
				setSelectedTags(amClear);
			} else if (type === '下午') {
				let pmClear = selectedTags.filter((item) => {
					return weektime.pm.indexOf(item) === -1;
				});
				setSelectedTags(pmClear);
			}
		}
	};

	return (
		<>
			<div style={{ marginBottom: '5px' }}>
				上午
				<Checkbox className="ml10 mt10" onChange={(e) => onCheckChange('上午', e)}>
					全选
				</Checkbox>
			</div>
			<Row gutter={16}>
				{weektime.am.map((item, index) => {
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

			<div style={{ marginBottom: '5px' }}>
				下午
				<Checkbox className="ml10 mt10" onChange={(e) => onCheckChange('下午', e)}>
					全选
				</Checkbox>
			</div>
			<Row gutter={16}>
				{weektime.pm.map((item, index) => {
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
		</>
	);
};

const weektime = {
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
};
