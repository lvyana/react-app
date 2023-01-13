/**
 * @name form对象
 * @user ly
 * @date 2023年1月3日
 */
import { ChangeEventHandler, ReactNode } from 'react';
import { FormItemMap } from '../type';
import { formButton } from './Ibutton';
import { formCascader } from './Icascader';
import { formCheckbox } from './Icheckbox';
import { formDatePicker, formRangePicker, formTimePicker, formTimeRangePicker, RangeValue } from './Ipicker';
import { formInputItem, formInputTextArea, formInputNumber } from './Iinput';
import { formRadio } from './Iradio';
import { formRate } from './Irate';
import { formSelect, formSeachSelect } from './Iselect';
import { formSwitch } from './Iswitch';
import { ChangeEventExtra, formTreeSelect } from './ItreeSelect';
import { formslider } from './Islider';
import { formUserDefined } from './IuserDefined';
import formUpload from './Iupload';

const FORM_ITEM_MAP: FormItemMap = {
	input: (item) => formInputItem(item),
	select: (item) => formSelect(item),
	treeselect: (item) => formTreeSelect(item),
	cascader: (item) => formCascader(item),
	datePicker: (item) => formDatePicker(item),
	rangePicker: (item) => formRangePicker(item),
	timePicker: (item) => formTimePicker(item),
	timeRangePicker: (item) => formTimeRangePicker(item),
	inputNumber: (item) => formInputNumber(item),
	switch: (item) => formSwitch(item),
	button: (item) => formButton(item),
	radio: (item) => formRadio(item),
	checkbox: (item) => formCheckbox(item),
	rate: (item) => formRate(item),
	textArea: (item) => formInputTextArea(item),
	seachSelect: (item) => formSeachSelect(item),
	slider: (item) => formslider(item),
	upload: (item) => formUpload(item),
	userDefined: (item) => formUserDefined(item)
};

export default FORM_ITEM_MAP;
