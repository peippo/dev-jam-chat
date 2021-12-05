import { useContext } from "react";
import { StoreContext } from "./store";
import Header from "./components/Header";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";
import UsernamePrompt from "./components/UsernamePrompt";

function App() {
	const {
		username: [username],
	} = useContext(StoreContext);

	return (
		<>
			<Header />
			{username ? (
				<>
					<main>
						<Messages />
					</main>
					<MessageInput />
				</>
			) : (
				<UsernamePrompt />
			)}
		</>
	);
}

export default App;
