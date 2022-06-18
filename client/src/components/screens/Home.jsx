import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHome = styled.div`
	width: 100vw;
	height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	font-size: 30px;
`;

const StyledButtons = styled(Link)`
	position: relative;
	border: 2px solid #333;
	padding: 10px;
	background: #f96e46;
	text-decoration: none;
	color: white;
`;

const InspectButton = ({ to }) => (
	<StyledButtons to={to}>Inspect</StyledButtons>
);

const DuelButton = ({ to }) => <StyledButtons to={to}>Duel</StyledButtons>;

const Home = () => {
	return (
		<StyledHome>
			<h1>Welcome to Dev Duel</h1>
			<InspectButton to="/inspect" />
			<div className="caption">Look up a fellow Dev's GitHub info</div>
			<DuelButton to="/duel" />
			<div className="caption">Pick two Devs to go head-to-head</div>
		</StyledHome>
	);
};

export default Home;
