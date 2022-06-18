import { useState } from "react";
import { inspectUser } from "../../services/userService";
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
	text-align: center;
	padding-top: 40px;
	line-height: 50px;
`;

const MrImage = styled.img`
	border-radius: 50%;
`;

const Inspect = () => {
	const [githubData, setGithubData] = useState([]);
	const [username, setUsername] = useState("");

	const getTheDataFromGithub = (e) => {
		e.preventDefault();
		inspectUser(username).then((data) => setGithubData(data));
	};

	const handleChange = (e) => {
		let currentName = e.target.value;
		setUsername(currentName);
	};

	return (
		<>
			<MomLookAtMyForm className="" onSubmit={getTheDataFromGithub}>
				<label>Username Goes Here</label>
				<input onChange={handleChange} />
				{username === "" && <p>You need to enter a name!</p>}
				<button>Submit</button>
			</MomLookAtMyForm>

			<ProfileCard>
				<ul>
					<li>Username: {githubData.name}</li>
					<li>Location: {githubData.location}</li>
					<li>Bio: {githubData.bio}</li>
					<li>Titles: {githubData.titles}</li>
					<li>Favorite Language: {githubData["favorite-language"]}</li>
					<li>Total Stars: {githubData["total-stars"]}</li>
					<li>Highest Star Count: {githubData["highest-starred"]}</li>
					<li>Public Repos: {githubData["public-repos"]}</li>
					<li>Perfect Repos: {githubData["perfect-repos"]}</li>
					<li>Followers: {githubData.followers}</li>
					<li>Following: {githubData.following}</li>
					<MrImage src={githubData["avatar-url"]} alt="pic of user" />
				</ul>
			</ProfileCard>
		</>
	);
};

export default Inspect;
