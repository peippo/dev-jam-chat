import { createContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const supabase = createClient(
		process.env.REACT_APP_SUPABASE_URL,
		process.env.REACT_APP_SUPABASE_KEY
	);

	let subscription = null;
	const [username, setUsername] = useState(null);
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const fetchMessages = async () => {
		const { data, error } = await supabase.from("messages").select();
		setIsLoading(false);

		if (!error) {
			console.log(data);
			setMessages(data);
			subscribeMessages();

			if (!data.some((row) => row.username === username)) {
				announceUser();
			}
		} else {
			setErrorMessage(error.message);
			setIsError(true);
			supabase.removeSubscription(subscription);
			subscription = null;
		}
	};

	const subscribeMessages = async () => {
		if (!subscription) {
			subscription = supabase
				.from("messages")
				.on("*", (payload) => {
					addNewMessage(payload);
				})
				.subscribe();
		}
	};

	const announceUser = async () => {
		try {
			await supabase.from("messages").insert({
				username: username,
				content: "has joined the chat",
				type: "server",
			});
		} catch (error) {
			console.log("error: ", error);
		}
	};

	const addNewMessage = (payload) => {
		setMessages((messages) => [...messages, payload.new]);
	};

	useEffect(() => {
		setUsername(localStorage.getItem("username"));
		if (username) {
			fetchMessages();
		}

		return () => {
			supabase.removeSubscription(subscription);
		};

		// FIXME:
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [username]);

	const store = {
		supabase,
		isLoading,
		error: [isError, errorMessage],
		messages,
		username: [username, setUsername],
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
