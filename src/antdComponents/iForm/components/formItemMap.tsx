/**
 * @file form对象
 * @author ly
 * @createDate 2023年1月3日
 */
import React from 'react';
import { FormItemMap } from '../type';
import getCascader from '../../iCascader';
import getCheckbox from '../../iCheckbox';
import { getDatePicker, getRangePicker, getTimePicker, getTimeRangePicker } from '../../iPicker';
import { getInput, getTextArea, getNumber } from '../../iInput';
import getRadio from '../../iRadio';
import getRate from '../../iRate';
import { getSelect } from '../../iSelect';
import getSwitch from '../../iSwitch';
import getTreeSelect from '../../iTreeSelect';
import getSlider from '../../iSlider';
import setSlot from './Slot';
import getUpload from '../../iUpload';
import IbuttonList from '@/antdComponents/iButton/List';

const FORM_ITEM_MAP: FormItemMap = {
	input: (item) => getInput(item),
	select: (item) => getSelect(item),
	treeSelect: (item) => getTreeSelect(item),
	cascader: (item) => getCascader(item),
	datePicker: (item) => getDatePicker(item),
	rangePicker: (item) => getRangePicker(item),
	timePicker: (item) => getTimePicker(item),
	timeRangePicker: (item) => getTimeRangePicker(item),
	inputNumber: (item) => getNumber(item),
	switch: (item) => getSwitch(item),
	button: (item) => <IbuttonList option={item.option || []} style={item.style} onClick={item.onClick}></IbuttonList>,
	radio: (item) => getRadio(item),
	checkbox: (item) => getCheckbox(item),
	rate: (item) => getRate(item),
	textArea: (item) => getTextArea(item),
	slider: (item) => getSlider(item),
	upload: (item) => getUpload(item),
	slot: (item) => setSlot(item)
};

export default FORM_ITEM_MAP;
