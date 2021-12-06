import { useContext } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";

const Logo = () => {
	const {
		username: [username],
	} = useContext(StoreContext);

	return (
		<StyledLogo isLogged={username}>
			<Pre>
				{`
             ▄                               
        ▁ ▁▁▁██▒  ░| d e v   j a m |░    ▃▄     
             ▐██   ▁▁▁▁▁ ▁    ▁▁▁▁     ▕██▍     
     ▄█████▄ ▐██ ▄███▇▄    ▅▇█████▄ ▀███████▄ ..
   ▐█▒ ___ ▀█ ███▀  __▀█▄  ▀▀▔▔▔▔▒██ _ ▓█▎ __
   ██ ░░░░░   ██▍  _░░ ▓█▏▄█████████ ░ ▓█▏ ░░ ░
   ▀██▄▁  ▁▄█ ██▎_░░░░ ▓█▎██▄   ▁▂▓█ ░ ▓█▄▁▁▁▁▁▁
     ▀▀████▀  ██ ░░░░░ ██▍ ▀█████▀██▄  ▀████▀
 -=/───────── █▒ ────────────────────────────/=-
  ░ ▒▒ ▒▒▒▒░░ ▀  ░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░ ▒░ ░
              :
 `}
			</Pre>
		</StyledLogo>
	);
};

const StyledLogo = styled.div`
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

export default Logo;
