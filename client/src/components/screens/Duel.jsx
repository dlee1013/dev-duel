import { useState } from "react";
import { duelUsers } from "../../services/userService";
import styled from "styled-components";

const MomLookAtMyForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 200px;
	align-items: center;
	margin: auto;
	gap: 1rem;

	button {
		padding: 5px 40px 5px 40px;
		background: #f96e46;
		&:hover {
			cursor: pointer;
		}
		color: white;
	}
`;

const ProfileCard = styled.div`
	display: inline-block;
	width: 50%;
	text-align: center;
	padding: 40px;
	line-height: 50px;
	ul {
		list-style-type: none;
	}

	#user1 {
		float: left;
	}

	#user2 {
		float: right;
	}
`;

const MrImage = styled.img`
	border-radius: 50%;
`;

const Winner = styled.h1`
	color: green;
	text-align: center;
	padding: 100px;
`;

const Duel = () => {
	const [githubData, setGithubData] = useState([{}, {}]);
	const [user1, setUser1] = useState("");
	const [user2, setUser2] = useState("");

	const getTheDataFromGithub = (e) => {
		e.preventDefault();
		duelUsers(user1, user2).then((data) => setGithubData(data));
	};

	const handleUser1 = (e) => {
		let currentName = e.target.value;
		setUser1(currentName);
	};

	const handleUser2 = (e) => {
		let currentName = e.target.value;
		setUser2(currentName);
	};

	const handleSuccess = (user1, user2) => {
		let winner = "";
		if (user1.followers < user2.followers) {
			winner = "Winner is " + user2.name;
		} else {
			winner = "Winner is " + user1.name;
		}

		if (user1.followers === user2.followers) {
			winner = "No winner";
		}
		return winner;
	};

	return (
		<>
			<MomLookAtMyForm className="" onSubmit={getTheDataFromGithub}>
				<label>User 1 Goes Here</label>
				<input onChange={handleUser1} />
				{user1 === "" && <p>You need to enter a name!</p>}

				<label>User 2 Goes Here</label>
				<input onChange={handleUser2} />
				{user2 === "" && <p>You need to enter a name!</p>}
				<button>Submit</button>
			</MomLookAtMyForm>

			<Winner>
				{handleSuccess(githubData[0], githubData[1])}
				!!
				<p>(based on followers)</p>
			</Winner>

			<ProfileCard>
				<ul id="user1">
					<li>Username: {githubData[0].name}</li>
					<li>Location: {githubData[0].location}</li>
					<li>Bio: {githubData[0].bio}</li>
					<li>Titles: {githubData[0].titles}</li>
					<li>Favorite Language: {githubData[0]["favorite-language"]}</li>
					<li>Total Stars: {githubData[0]["total-stars"]}</li>
					<li>Highest Star Count: {githubData[0]["highest-starred"]}</li>
					<li>Public Repos: {githubData[0]["public-repos"]}</li>
					<li>Perfect Repos: {githubData[0]["perfect-repos"]}</li>
					<li>Followers: {githubData[0].followers}</li>
					<li>Following: {githubData[0].following}</li>
					<MrImage src={githubData[0]["avatar-url"]} alt="pic of user" />
				</ul>
			</ProfileCard>

			<ProfileCard>
				<ul id="user2">
					<li>Username: {githubData[1].name}</li>
					<li>Location: {githubData[1].location}</li>
					<li>Bio: {githubData[1].bio}</li>
					<li>Titles: {githubData[1].titles}</li>
					<li>Favorite Language: {githubData[1]["favorite-language"]}</li>
					<li>Total Stars: {githubData[1]["total-stars"]}</li>
					<li>Highest Star Count: {githubData[1]["highest-starred"]}</li>
					<li>Public Repos: {githubData[1]["public-repos"]}</li>
					<li>Perfect Repos: {githubData[1]["perfect-repos"]}</li>
					<li>Followers: {githubData[1].followers}</li>
					<li>Following: {githubData[1].following}</li>
					<MrImage src={githubData[1]["avatar-url"]} alt="pic of user" />
				</ul>
			</ProfileCard>
		</>
	);
};

export default Duel;
