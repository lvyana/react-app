// useEffect第一次不执行
import React, { useEffect, useRef } from 'react';

type effectProps = (fn: () => void, deps: (string | number | string[] | number[])[]) => void;

export const useNoFirstMount: effectProps = (fn, deps) => {
	const ref = useRef(false);
	useEffect(() => {
		if (ref.current) {
			fn();
		} else {
			ref.current = true;
		}
	}, deps);
};

// useEffect第一次执行
export const useFirstMount: effectProps = (fn, deps) => {
	const ref = useRef(true);
	useEffect(() => {
		if (ref.current) {
			fn();
		} else {
			ref.current = false;
		}
	}, deps);
};
