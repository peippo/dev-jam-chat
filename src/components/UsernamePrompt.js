import { useContext, useState } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";
import CustomInput from "./CustomInput";
import { getRandomName } from "../utils/getRandomName";

const UsernamePrompt = () => {
	const {
		username: [, setUsername],
	} = useContext(StoreContext);

	const [usernameValue, setUsernameValue] = useState("");

	const filterUsernameValue = (value) => {
		setUsernameValue(value.replace(/\s/g, ""));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setUsername(usernameValue);
		localStorage.setItem("username", usernameValue);
	};

	const handleRandomizeClick = () => {
		setUsernameValue(getRandomName());
	};

	return (
		<>
			<Pre>{`
                                        _  
       |_   _     _   _ _        _       ) 
  \\/\\/ | | (_)   (_| | (/_   \\/ (_) |_| .  
─────= enter nickname =─── ─ /                  
			`}</Pre>

			<Controls>
				<Form onSubmit={handleSubmit}>
					<CustomInput
						value={usernameValue}
						setValue={filterUsernameValue}
						visibleLabel=">"
						screenReaderLabel="Enter your nickname"
						minLength="3"
						maxLength="9"
						style={{ width: "10ch" }}
					/>
					<Button disabled={!usernameValue || usernameValue.length <= 2}>
						ok
					</Button>
				</Form>

				<Button onClick={handleRandomizeClick}>random nick</Button>
			</Controls>
		</>
	);
};

const Form = styled.form`
	display: flex;
	margin-left: 40px;
`;

const Pre = styled.pre`
	margin: -20px 0 0 -5px;
	background: linear-gradient(
		#ffffff 15%,
		var(--highlight-color-yellow) 55%,
		var(--highlight-color-cyan) 75%,
		var(--highlight-color-cyan)
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Controls = styled.div`
	display: flex;
`;

const Button = styled.button`
	font-family: var(--font-family);
	font-size: inherit;
	margin-left: 1rem;
	background: none;
	border: 0;
	padding: 0;
	white-space: nowrap;
	color: var(--highlight-color-yellow);
	border-bottom: 2px solid var(--highlight-color-yellow);

	&:before {
		content: "[░ ";
	}

	&:after {
		content: " ░]";
	}

	&:hover {
		cursor: pointer;
		border-bottom: 1px solid var(--highlight-color-yellow);
		color: var(--highlight-color-cyan);
	}

	&[disabled] {
		color: var(--highlight-color-gray);
		border-color: var(--highlight-color-gray);

		&:hover {
			border-width: 2px;
			cursor: not-allowed;
		}
	}
`;

export default UsernamePrompt;
