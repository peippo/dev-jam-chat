import { useContext } from "react";
import { StoreContext } from "../store";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import NicknameDisplay from "./NicknameDisplay";

const Header = () => {
	const {
		username: [username],
	} = useContext(StoreContext);

	return (
		<StyledHeader isLogged={username}>
			<Logo />
			{username && <NicknameDisplay />}
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	position: relative;

	${(props) =>
		props.isLogged &&
		css`
			&:before {
				content: "";
				position: absolute;
				bottom: -1.5rem;
				left: 0;
				height: 1.5rem;
				width: calc(100% - 20px);
				background: linear-gradient(
					to bottom,
					var(--background-color),
					var(--background-color-transparent)
				);
				z-index: 1;
			}

			&:after {
				content: "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
				position: absolute;
				bottom: -1.5rem;
				left: 0;
				width: calc(100% - 20px);
				overflow: hidden;
				color: var(--background-color);
			}
		`}
`;

export default Header;
