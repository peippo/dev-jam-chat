const Timestamp = ({ createdAt }) => {
	const date = new Date(createdAt);

	const addLeadingZero = (number) => {
		if (number < 10) {
			return 0 + number.toString();
		} else {
			return number.toString();
		}
	};

	const h = addLeadingZero(date.getHours());
	const m = addLeadingZero(date.getMinutes());
	const s = addLeadingZero(date.getSeconds());

	return (
		<span>
			[{h}:{m}:{s}]
		</span>
	);
};

export default Timestamp;
