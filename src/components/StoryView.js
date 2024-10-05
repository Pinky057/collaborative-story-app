import React, { useEffect, useState } from 'react';
import { getStory } from '../services/storyService';
import '../styles/StoryView.css';

const StoryView = ({ storyId }) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      const data = await getStory(storyId);
      setStory(data);
    };
    fetchStory();
  }, [storyId]);

  if (!story) return <div>Loading story...</div>;

  return (
      <div className="story-view">
        <h2>{story.title}</h2>
        <p>{story.content}</p>
        {story.mediaCid && (
            <div className="story-media">
              <img src={`https://gateway.pinata.cloud/ipfs/${story.mediaCid}`} alt="Story Media" />
            </div>
        )}
      </div>
  );
};

export default StoryView;
