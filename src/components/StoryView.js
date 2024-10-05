import React, { useEffect, useState } from 'react';
import { getStory } from '../services/storyService';  // Assuming the story retrieval function is in utils

const StoryView = ({ storyId }) => {
    const [story, setStory] = useState(null);
    const [imageURL, setImageURL] = useState(null);  // To store the fetched media URL
    const [error, setError] = useState(null);  // To store any potential errors

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const data = await getStory(storyId);  // Fetch story by ID
                console.log('Fetched Story:', data);  // Debugging line
                setStory(data);  // Set story data
                if (data.mediaCid) {
                    fetchMedia(data.mediaCid);  // Fetch media file if CID is available
                }
            } catch (error) {
                console.error('Error fetching story:', error);
                setError('Failed to load story. Please try again later.');
            }
        };

        const fetchMedia = async (mediaCid) => {
            try {
                // Fetch media from an alternative IPFS gateway to avoid CORS issues
                const response = await fetch(`https://ipfs.io/ipfs/${mediaCid}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch media');
                }
                const data = await response.blob();
                const imageUrl = URL.createObjectURL(data);  // Convert blob to a URL
                setImageURL(imageUrl);  // Store the fetched image URL
            } catch (error) {
                console.error('Error fetching media:', error);
                setError('Failed to load media content.');  // Update error if media fetch fails
            }
        };

        fetchStory();
    }, [storyId]);

    // Check if there's an error and display a message
    if (error) {
        return <p>{error}</p>;
    }

    // If the story is not yet loaded, show a loading message
    if (!story) {
        return <p>Loading story...</p>;
    }

    return (
        <div className="story-view">
            <h2>{story.title}</h2>  {/* Display title */}
            <p>{story.content}</p>  {/* Display content */}
            {imageURL ? (  // Display media only if the imageURL is available
                <img
                    src={imageURL}
                    alt="Story Media"
                />
            ) : (
                story.mediaCid && <p>Loading media...</p>  // Display loading message for media
            )}
        </div>
    );
};

export default StoryView;
