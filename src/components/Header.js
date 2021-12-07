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
			&:before,
			&:after {
				position: absolute;
				left: 0;
				width: calc(100% - 20px);
				z-index: 1;
			}

			&:before {
				content: "";
				bottom: -1.5rem;
				height: 1.5rem;
				background: linear-gradient(
					to bottom,
					var(--background-color),
					var(--background-color-transparent)
				);
			}

			&:after {
				content: "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
				bottom: -1.5rem;
				overflow: hidden;
				color: var(--background-color);
			}
		`}
`;

export default Header;
