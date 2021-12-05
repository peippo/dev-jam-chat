import styled from "styled-components";

const Header = () => {
	return (
		<header>
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
		</header>
	);
};

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
