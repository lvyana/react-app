import { ChangeEventHandler, ReactNode } from 'react';
import { FormItemMap } from '../type';
import { formButton, IformButton } from './ibutton';
import { formCascader } from './Icascader';
import { formCheckbox } from './Icheckbox';
import { formDatePicker, formRangePicker, formTimePicker, formTimeRangePicker, RangeValue } from './Idate';
import { formInputItem, formInputTextArea, formInputNumber } from './Iinput';
import { formRadio, formRadioOptionsParams } from './Iradio';
import { formRate } from './irate';
import { formSelect, formSeachSelect } from './Iselect';
import { formSwitch } from './Iswitch';
import { ChangeEventExtra, formTreeSelect } from './ItreeSelect';
import { formUserDefined } from './IuserDefined';

const FORM_ITEM_MAP: FormItemMap = {
	input: (item) => formInputItem(item),
	select: (item) => formSelect(item),
	treeselect: (item) => formTreeSelect(item),
	cascader: (item) => formCascader(item),
	datePicker: (item) => formDatePicker(item),
	rangePicker: (item) => formRangePicker(item),
	TimePicker: (item) => formTimePicker(item),
	timeRangePicker: (item) => formTimeRangePicker(item),
	inputNumber: (item) => formInputNumber(item),
	switch: (item) => formSwitch(item),
	button: (item, onFinish) => formButton(item, onFinish),
	radio: (item) => formRadio(item),
	checkbox: (item) => formCheckbox(item),
	rate: (item) => formRate(item),
	textArea: (item) => formInputTextArea(item),
	seachSelect: (item) => formSeachSelect(item),
	userDefined: (item) => formUserDefined(item)
};

export default FORM_ITEM_MAP;
