import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css"; // Import CSS file for styling

const ChatHome = () => {
	return (
		<div className="home-container">
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default ChatHome;
