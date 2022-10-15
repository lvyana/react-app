import { formButton } from './ibutton';
import { formCascader } from './Icascader';
import { formCheckbox } from './Icheckbox';
import { formDatePicker, formRangePicker, formTimePicker, formTimeRangePicker } from './Idate';
import { formInputItem, formInputTextArea, formInputNumber } from './Iinput';
import { formRadio } from './Iradio';
import { formRate } from './irate';
import { formSelect, formSeachSelect } from './Iselect';
import { formSwitch } from './Iswitch';
import { formTreeSelect } from './ItreeSelect';
import { formUserDefined } from './IuserDefined';
import { FormItemParam } from '../type';

const FORM_ITEM_MAP = {
	input: (item: FormItemParam) => formInputItem(item),
	select: (item: FormItemParam) => formSelect(item),
	treeselect: (item: FormItemParam) => formTreeSelect(item),
	cascader: (item: FormItemParam) => formCascader(item),
	datePicker: (item: FormItemParam) => formDatePicker(item),
	rangePicker: (item: FormItemParam) => formRangePicker(item),
	TimePicker: (item: FormItemParam) => formTimePicker(item),
	timeRangePicker: (item: FormItemParam) => formTimeRangePicker(item),
	inputNumber: (item: FormItemParam) => formInputNumber(item),
	switch: (item: FormItemParam) => formSwitch(item),
	button: (item: FormItemParam, onFinish?: (value: string) => void) => formButton(item, onFinish),
	radio: (item: FormItemParam) => formRadio(item),
	checkbox: (item: FormItemParam) => formCheckbox(item),
	rate: (item: FormItemParam) => formRate(item),
	textArea: (item: FormItemParam) => formInputTextArea(item),
	seachSelect: (item: FormItemParam) => formSeachSelect(item),
	userDefined: (item: FormItemParam) => formUserDefined(item)
};

export default FORM_ITEM_MAP;
