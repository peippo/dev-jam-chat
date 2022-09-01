import { useContext } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";

const NicknameDisplay = () => {
	const {
		username: [username, setUsername],
	} = useContext(StoreContext);

	const handleClick = () => {
		localStorage.removeItem("username");
		setUsername("");
	};

	return (
		<Wrapper>
			&lt;<Username>{username}</Username>&gt; /{" "}
			<Button onClick={() => handleClick()}>
				change <span className="screen-reader-text"> nickname</span>
			</Button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;

	@media (min-width: 500px) {
		top: 20px;
		right: 20px;
	}
`;

const Username = styled.span`
	color: var(--highlight-color-cyan);
`;

const Button = styled.button`
	background: none;
	border: none;
	color: var(--highlight-color-yellow);

	&:hover {
		cursor: pointer;
	}
`;

export default NicknameDisplay;
