import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList  from "./VideoList";
import VideoDetail from "./VideoDetail";
import './App.css';
import useVideos from "../hooks/useVideos";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);

	// setSelectedVideo(response.data.items[0]);

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit}/>
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