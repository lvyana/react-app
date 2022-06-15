import { Rule } from 'rc-field-form/lib/interface';

interface RULES {
	(rule: Rule, value: string): Promise<void>;
}

// 手机号码和座机验证
export const validatePhoneTwo: RULES = (rule, value) => {
	const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
	if (value === '' || value === undefined || value === null) {
		return Promise.resolve();
	} else {
		if (!reg.test(value) && value !== '') {
			return Promise.reject(new Error('请输入正确的电话号码或者固话号码'));
		} else {
			return Promise.resolve();
		}
	}
};

// 是否固话
export const validateTelphone: RULES = (rule, value) => {
	const reg = /0\d{2,3}-\d{7,8}/;
	if (value === '' || value === undefined || value === null) {
		return Promise.resolve();
	} else {
		if (!reg.test(value) && value !== '') {
			return Promise.reject(new Error('请输入正确的固定电话）'));
		} else {
			return Promise.resolve();
		}
	}
};

// 是否手机号码
export const validatePhone: RULES = (rule, value) => {
	const reg = /^[1][3-9][0-9]{9}$/;
	if (value === '' || value === undefined || value === null) {
		return Promise.resolve();
	} else {
		if (!reg.test(value) && value !== '') {
			return Promise.reject(new Error('请输入正确的电话号码'));
		} else {
			return Promise.resolve();
		}
	}
};

// 是否身份证号码
export const validateIdNo: RULES = (rule, value) => {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if (value === '' || value === undefined || value === null) {
		return Promise.reject(new Error('身份证不能为空'));
	} else {
		if (!reg.test(value) && value !== '') {
			return Promise.reject(new Error('请输入正确的身份证号码'));
		} else {
			return Promise.resolve();
		}
	}
};

// 是否邮箱
export const validateEMail: RULES = (rule, value) => {
	// const reg = /^([a-zA-Z0-9]+[-_]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
	const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if (value === '' || value === undefined || value === null) {
		return Promise.reject(new Error('邮箱不能为空'));
	} else {
		if (!reg.test(value)) {
			return Promise.reject(new Error('请输入正确的邮箱'));
		} else {
			return Promise.resolve();
		}
	}
};

// 验证内容是否包含英文数字以及下划线
export const isPassword: RULES = (rule, value) => {
	const reg = /^[_a-zA-Z0-9]+$/;
	if (value === '' || value === undefined || value === null) {
		return Promise.resolve();
	} else {
		if (!reg.test(value)) {
			return Promise.reject(new Error('仅由英文字母，数字以及下划线组成'));
		} else {
			return Promise.resolve();
		}
	}
};

// 自动检验数值的范围
export const checkMax20000: RULES = (rule, value) => {
	if (value === '' || value === undefined || value === null) {
		return Promise.resolve();
	} else if (!Number(value)) {
		return Promise.reject(new Error('请输入[1,20000]之间的数字'));
	} else if (Number(value) < 1 || Number(value) > 20000) {
		return Promise.reject(new Error('请输入[1,20000]之间的数字'));
	} else {
		return Promise.resolve();
	}
};

// 验证数字输入框最大数值
export const checkMaxVal: RULES = (rule, value) => {
	if (Number(value) < 0 || Number(value) > 9999) {
		return Promise.reject(new Error('请输入[0,9999]之间的数字'));
	} else {
		return Promise.resolve();
	}
};

// 验证是否1-99之间
export const isOneToNinetyNine: RULES = (rule, value) => {
	if (!value) {
		return Promise.reject(new Error('输入不可以为空'));
	}
	if (!Number(value)) {
		return Promise.reject(new Error('请输入正整数'));
	} else {
		const re = /^[1-9][0-9]{0,1}$/;
		const rsCheck = re.test(value);
		if (!rsCheck) {
			return Promise.reject(new Error('请输入正整数，值为【1,99】'));
		} else {
			return Promise.resolve();
		}
	}
};

// 验证是否整数
export const isInteger: RULES = (rule, value) => {
	if (!value) {
		return Promise.reject(new Error('输入不可以为空'));
	}

	if (!Number(value)) {
		return Promise.reject(new Error('请输入正整数'));
	} else {
		const re = /^[0-9]*[1-9][0-9]*$/;
		const rsCheck = re.test(value);
		if (!rsCheck) {
			return Promise.reject(new Error('请输入正整数'));
		} else {
			return Promise.resolve();
		}
	}
};

// 密码校验
export const validatePsdReg: RULES = (rule, value) => {
	if (!value) {
		return Promise.reject(new Error('请输入密码'));
	}
	if (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/.test(value)) {
		return Promise.reject(new Error('请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种'));
	} else {
		return Promise.resolve();
	}
};

// 中文校验
export const validateContacts: RULES = (rule, value) => {
	if (!value) {
		return Promise.reject(new Error('请输入中文'));
	}
	if (!/^[\u0391-\uFFE5A-Za-z]+$/.test(value)) {
		return Promise.reject(new Error('不可输入特殊字符'));
	} else {
		return Promise.resolve();
	}
};

// 身份证校验
export const ID: RULES = (rule, value) => {
	if (!value) {
		return Promise.reject(new Error('身份证不能为空'));
	}
	if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
		return Promise.reject(new Error('请输入正确的二代身份证号码'));
	} else {
		return Promise.resolve();
	}
};

// 账号校验
export const validateCode: RULES = (rule, value) => {
	if (!value) {
		return Promise.reject(new Error('请输入账号'));
	}
	if (!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(value)) {
		return Promise.reject(new Error('账号必须为6-20位字母和数字组合'));
	} else {
		return Promise.resolve();
	}
};

// 纯数字校验
export const validateNumber: RULES = (rule, value) => {
	let numberReg = /^\d+$|^\d+[.]?\d+$/;
	if (value !== '') {
		if (!numberReg.test(value)) {
			return Promise.reject(new Error('请输入数字'));
		} else {
			return Promise.resolve();
		}
	} else {
		return Promise.reject(new Error('请输入值'));
	}
};

// 最多一位小数
export const onePoint: RULES = (rule, value) => {
	if (!/^[0-9]+([.]{1}[0-9]{1})?$/.test(value)) {
		return Promise.reject(new Error('最多一位小数！！！'));
	} else {
		return Promise.resolve();
	}
};
