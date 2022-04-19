import React, {useState} from 'react';

const SearchBar = ({onTermSubmit}) => {
	const [term, setTerm] = useState('');

	const onFormSubmit = (event) => {
		event.preventDefault();
		onTermSubmit(term);
	}

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label htmlFor="">Video Search</label>
					<input
						value={term}
						type="text"
						onChange={(event) => setTerm(event.target.value)} />
				</div>
			</form>
		</div>
	)
}

export default SearchBar;