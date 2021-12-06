import { useContext } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";

const Header = () => {
	const {
		username: [username],
	} = useContext(StoreContext);

	return (
		<StyledHeader isLogged={username}>
			<Logo>
				<Pre>
					{`
              ▄                               
              █▒  ░| d e v   j a m |░   ▄     
              ██                       ██     
     ▄█████▄  ██ ▄███▄▄     ▄█████▄ ▀███████▄ ..
   ▄█▒     ▀█ ███▀    ▀█▄  ▀▀    ▒██   ▓█
   ██ ░░░░░   ██    ░░ ▓█ ▄█████████ ░ ▓█  ░░ ░
   ▀██▄▄   ▄█ ██  ░░░░ ▓█ ██▄     ▓█ ░ ▓█▄
     ▀▀████▀  ██ ░░░░░ ██  ▀█████▀██▄  ▀████▀
 -=/───────── █▒ ────────────────────────────/=-
  ░ ▒▒ ▒▒▒▒░░ ▀  ░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░ ▒░ ░
              :
 `}
				</Pre>
			</Logo>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	transition: filter 2s;
	filter: ${(props) =>
		props.isLogged ? "none" : "saturate(0) brightness(0.3)"};
`;

const Logo = styled.div`
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
