import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import VideoList  from "./VideoList";
import VideoDetail from "./VideoDetail";
import './App.css';
import useVideos from "../hooks/useVideos";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('carrots');

	// Note: Anytime we get a new list of videos or any
	//  time videos changes, useEffect() will be called and
	//  select the very first video in that list.
	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={search}/>
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;