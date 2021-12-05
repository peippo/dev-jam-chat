import styled from "styled-components";

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
		<StyledTimestamp dateTime={createdAt}>
			[{h}:{m}:{s}]
		</StyledTimestamp>
	);
};

const StyledTimestamp = styled.time`
	margin-right: 0.5rem;
`;

export default Timestamp;
