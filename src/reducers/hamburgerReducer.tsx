export const InitialState = {
	isOpen: false,
	rotate: false,
	rotateReverse: false,
	disappear: false,
};

export const hamburgerReducer = (state: any, action: { type: any }) => {
	switch (action.type) {
		case 'OPEN':
			return { isOpen: true, rotate: true, rotateReverse: true, disappear: true };
		case 'CLOSE':
			return { isOpen: false, rotate: false, rotateReverse: false, disappear: false };
		default:
			return state;
	}
};
