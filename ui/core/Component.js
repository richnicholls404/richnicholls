import React from 'react';

export default class Component extends React.Component {
	// bem-style class names
	static className(suffix) {
		if (!suffix) {
			return this.id;
		}

		if (suffix.indexOf('--') === 0) {
			return `${this.id}${suffix}`;
		}

		return `${this.id}__${suffix}`;
	}
	// alias for static method
	className(...args) {
		return this.constructor.className(...args);
	}
}
