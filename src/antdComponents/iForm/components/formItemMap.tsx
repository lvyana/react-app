/**
 * @file form对象
 * @author ly
 * @createDate 2023年1月3日
 */
import React from 'react';
import { FormItemMap } from '../type';
import Icascader from '../../iCascader';
import Icheckbox from '../../iCheckbox';
import { IdatePicker, IrangePicker, ItimePicker, ItimeRangePicker } from '../../iPicker';
import { Iinput, ItextArea, Inumber } from '../../iInput';
import Iradio from '../../iRadio';
import Irate from '../../iRate';
import { Iselect, IseachSelect } from '../../iSelect';
import Iswitch from '../../iSwitch';
import ItreeSelect from '../../iTreeSelect';
import Islider from '../../iSlider';
import Slot from './Slot';
import Iupload from '../../iUpload';
import IbuttonList from '@/antdComponents/iButton/List';

const FORM_ITEM_MAP: FormItemMap = {
	input: (item) => <Iinput item={item}></Iinput>,
	select: (item) => <Iselect item={item}></Iselect>,
	treeSelect: (item) => <ItreeSelect item={item}></ItreeSelect>,
	cascader: (item) => <Icascader item={item}></Icascader>,
	datePicker: (item) => <IdatePicker item={item}></IdatePicker>,
	rangePicker: (item) => <IrangePicker item={item}></IrangePicker>,
	timePicker: (item) => <ItimePicker item={item}></ItimePicker>,
	timeRangePicker: (item) => <ItimeRangePicker item={item}></ItimeRangePicker>,
	inputNumber: (item) => <Inumber item={item}></Inumber>,
	switch: (item) => <Iswitch item={item}></Iswitch>,
	button: (item) => <IbuttonList option={item.option || []} onClick={item.onClick}></IbuttonList>,
	radio: (item) => <Iradio item={item}></Iradio>,
	checkbox: (item) => <Icheckbox item={item}></Icheckbox>,
	rate: (item) => <Irate item={item}></Irate>,
	textArea: (item) => <ItextArea item={item}></ItextArea>,
	seachSelect: (item) => <IseachSelect item={item}></IseachSelect>,
	slider: (item) => <Islider item={item}></Islider>,
	upload: (item) => <Iupload item={item}></Iupload>,
	userDefined: (item) => <Slot item={item}></Slot>
};

export default FORM_ITEM_MAP;
