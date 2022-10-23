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
import { FormItemCom } from '../type';

const FORM_ITEM_MAP = {
	input: (item: FormItemCom) => formInputItem(item),
	select: (item: FormItemCom) => formSelect(item),
	treeselect: (item: FormItemCom) => formTreeSelect(item),
	cascader: (item: FormItemCom) => formCascader(item),
	datePicker: (item: FormItemCom) => formDatePicker(item),
	rangePicker: (item: FormItemCom) => formRangePicker(item),
	TimePicker: (item: FormItemCom) => formTimePicker(item),
	timeRangePicker: (item: FormItemCom) => formTimeRangePicker(item),
	inputNumber: (item: FormItemCom) => formInputNumber(item),
	switch: (item: FormItemCom) => formSwitch(item),
	button: (item: FormItemCom, onFinish?: (value: string) => void) => formButton(item, onFinish),
	radio: (item: FormItemCom) => formRadio(item),
	checkbox: (item: FormItemCom) => formCheckbox(item),
	rate: (item: FormItemCom) => formRate(item),
	textArea: (item: FormItemCom) => formInputTextArea(item),
	seachSelect: (item: FormItemCom) => formSeachSelect(item),
	userDefined: (item: FormItemCom) => formUserDefined(item)
};

export default FORM_ITEM_MAP;
