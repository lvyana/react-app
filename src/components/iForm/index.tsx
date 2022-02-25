import React, { FC, useState } from 'react';
import {
	Form,
	Input,
	Button,
	Row,
	Col,
	Select,
	TreeSelect,
	Cascader,
	DatePicker,
	InputNumber,
	Switch,
	Radio,
	Checkbox,
	Rate,
	FormInstance
} from 'antd';
import IconFont from '@/utils/iconfont';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { FORMITEM } from './type';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from '@/styles/index.module.scss';

const { RangePicker } = DatePicker;
const { SHOW_PARENT } = TreeSelect;

interface PropsType {
	formList?: FORMITEM[];
	form: FormInstance;
	onFinish?: ((values?: any) => void) | undefined;
	num?: number;
	setNum?: React.Dispatch<React.SetStateAction<number>>;
}
const Ifrom: FC<PropsType> = ({ formList, form, onFinish, num = formList?.length }) => {
	// const onFinish = (values: object) => {
	// 	console.log('Success:', values);
	// };
	const [expand, setExpand] = useState(false);
	const [showNum, setShowNum] = useState(num);
	const onReset = () => {
		console.log(typeof form);
		form.resetFields();
		onFinish && onFinish();
	};

	// input
	const formInputItem = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item label={item.label} name={item.name} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Input onChange={item.onChange} placeholder={item.placeholder ? item.placeholder : '请输入' + item.label} />
				</Form.Item>
			</Col>
		);
	};
	// 文本框
	const formInputTextArea = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item label={item.label} name={item.name} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Input.TextArea
						showCount={item.maxLength ? true : false}
						onChange={item.onChange}
						placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
						maxLength={item.maxLength}
					/>
				</Form.Item>
			</Col>
		);
	};
	// Select
	const formSelect = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Select
						allowClear
						onChange={item.onChange}
						fieldNames={item.fieldNames}
						options={item.option}
						mode={item.mode}
						placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}></Select>
				</Form.Item>
			</Col>
		);
	};
	// 树形下拉
	const formTreeSelect = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<TreeSelect
						treeData={item.option}
						showCheckedStrategy={SHOW_PARENT}
						treeCheckable={item.checkbox}
						fieldNames={item.fieldNames}
						allowClear
						onChange={item.onChange}
						placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
					/>
				</Form.Item>
			</Col>
		);
	};
	// 联级
	const formCascader = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Cascader
						fieldNames={item.fieldNames}
						options={item.option}
						allowClear
						onChange={item.onChange}
						placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
					/>
				</Form.Item>
			</Col>
		);
	};
	// 时间
	const formDatePicker = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<DatePicker onChange={item.onChange} disabledDate={item.disabledDate} />
				</Form.Item>
			</Col>
		);
	};
	// 区间时间
	const formRangePicker = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<RangePicker onChange={item.onChange} disabledDate={item.disabledDate} />
				</Form.Item>
			</Col>
		);
	};
	// 数字
	const formInputNumber = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<InputNumber min={0} onChange={item.onChange} />
				</Form.Item>
			</Col>
		);
	};
	// 是否
	const formSwitch = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item
					name={item.name}
					label={item.label}
					rules={item.rules}
					valuePropName="checked"
					{...item.layout}
					labelAlign={item.labelAlign}>
					<Switch onChange={item.onChange} />
				</Form.Item>
			</Col>
		);
	};

	// 图标单选
	const formRadioIcon = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
					<Radio.Group onChange={item.onChange}>
						{item.option &&
							item.option.map((value) => {
								return (
									<Radio key={value.key} value={value.value}>
										<IconFont type={value.name} />
									</Radio>
								);
							})}
					</Radio.Group>
				</Form.Item>
			</Col>
		);
	};
	// 单选
	const formRadio = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
					<Radio.Group onChange={item.onChange}>
						{item.option &&
							item.option.map((value) => {
								return (
									<Radio key={value.key} value={value.value}>
										{value.name}
									</Radio>
								);
							})}
					</Radio.Group>
				</Form.Item>
			</Col>
		);
	};
	// 多选
	const formCheckbox = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
					<Checkbox.Group options={item.option} onChange={item.onChange} />
				</Form.Item>
			</Col>
		);
	};
	// 评分
	const formRate = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
					<Rate tooltips={item.option} onChange={item.onChange} />
				</Form.Item>
			</Col>
		);
	};
	//按钮
	const formButton = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Row style={item.style}>
					<Col className={styles.mr10}>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								{item.option && item.option[0]}
							</Button>
						</Form.Item>
					</Col>
					<Col className={styles.mr10}>
						<Form.Item>
							<Button htmlType="button" onClick={onReset}>
								{item.option && item.option[1]}
							</Button>
						</Form.Item>
					</Col>
					{num ? (
						<Col>
							<Form.Item>
								<Button
									htmlType="button"
									type="link"
									onClick={() => {
										if (expand) {
											setShowNum(num);
										} else {
											setShowNum(formList?.length);
										}
										setExpand(!expand);
									}}>
									{expand ? <UpOutlined /> : <DownOutlined />}
								</Button>
							</Form.Item>
						</Col>
					) : (
						<></>
					)}
				</Row>
			</Col>
		);
	};
	const formItem = (item: FORMITEM) => {
		if (item.show === false) return;
		switch (item.type) {
			case 'input':
				return formInputItem(item);
			case 'select':
				return formSelect(item);
			case 'treeselect':
				return formTreeSelect(item);
			case 'cascader':
				return formCascader(item);
			case 'datePicker':
				return formDatePicker(item);
			case 'rangePicker':
				return formRangePicker(item);
			case 'inputNumber':
				return formInputNumber(item);
			case 'switch':
				return formSwitch(item);
			case 'button':
				return formButton(item);
			case 'radioIcon':
				return formRadioIcon(item);
			case 'radio':
				return formRadio(item);
			case 'checkbox':
				return formCheckbox(item);
			case 'rate':
				return formRate(item);
			case 'textArea':
				return formInputTextArea(item);
			default:
				return;
		}
	};
	// 尺寸
	const size = useSelector<RootState>((state) => state.layout.size);

	// 显示表单个数
	const showForm = (showNum: number | undefined, i: number, item: FORMITEM) => {
		if (!showNum) {
			return formItem(item);
		} else if (showNum > i || i === (formList && formList.length - 1)) {
			return formItem(item);
		} else {
			return <></>;
		}
	};

	return (
		<Form form={form} initialValues={{ remember: true }} onFinish={onFinish} size={size as SizeType}>
			<Row>
				{formList &&
					formList.map((item: FORMITEM, i) => {
						return showForm(showNum, i, item);
					})}
			</Row>
		</Form>
	);
};
export default Ifrom;
