import React , {useState} from 'react';
import addArticles from './../reduser/login/index';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const initialState = {
	token: [],
  };

const NewArticle = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const state = {
		setTitle,
		setDescription,
		createNewArticle,
	};

	function validateToken() {
		const user = jwt.decode(token);
		if (!user) throw new Error();
	}

	async function createNewArticle() {
		try {
			validateToken();

			await axios.post(
				'http://localhost:5000/articles',
				{
					title,
					description,
					author: userId,
				},
				{
					headers: {
						Authorization: `Bearer ${loginContext.token}`,
					},
				},
			);

		} catch (error) {
			console.log(error);
		
		}
	const handleSubmit = (e) => {
		e.preventDefault();
		createNewArticle();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="article title here"
					onChange={(e) =>setTitle(e.target.value)}
				/>
				<textarea
					placeholder="article description here"
					onChange={(e) =>setDescription(e.target.value)}
				></textarea>
				<button>Create New Article</button>
			</form>

		</>
	);
};
}

export default NewArticle;
