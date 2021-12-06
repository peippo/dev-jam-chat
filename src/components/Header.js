import { useContext } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";

const Header = () => {
	const {
		username: [username],
	} = useContext(StoreContext);

	return (
		<StyledHeader>
			<Logo isLogged={username}>
				<Pre>
					{`
              ▄                               
              █▒  ░| d e v   j a m |░   ▄     
              ██                       ██     
     ▄█████▄  ██ ▄███▄▄     ▄█████▄ ▀███████▄ ..
   ▄█▒ ___ ▀█ ███▀  __▀█▄  ▀▀    ▒██ _ ▓█  __
   ██ ░░░░░   ██   _░░ ▓█ ▄█████████ ░ ▓█  ░░ ░
   ▀██▄▄   ▄█ ██ _░░░░ ▓█ ██▄     ▓█ ░ ▓█▄
     ▀▀████▀  ██ ░░░░░ ██  ▀█████▀██▄  ▀████▀
 -=/───────── █▒ ────────────────────────────/=-
  ░ ▒▒ ▒▒▒▒░░ ▀  ░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░ ▒░ ░
              :
 `}
				</Pre>
			</Logo>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	position: relative;

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
`;

const Logo = styled.div`
	transition: filter 2s;
	filter: ${(props) =>
		props.isLogged ? "none" : "saturate(0) brightness(0.3)"};
	overflow: hidden;
`;

const Pre = styled.pre`
	margin: 0;
	line-height: 95%;
	background: linear-gradient(
		#ffffff 15%,
		var(--highlight-color-yellow) 55%,
		var(--highlight-color-cyan) 75%,
		var(--highlight-color-cyan)
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export default Header;
