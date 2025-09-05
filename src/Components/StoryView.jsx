import React from 'react';

const StoryView = ({ story, onBack }) => {
  return (
    <div className="story-view">
      <button onClick={onBack} className="back-button">
        &larr; Back to Stories
      </button>
      <div className="story-content">
        <h2>{story.title}</h2>
        <h4>by {story.author}</h4>
        <img src={story.cover} alt={story.title} className="story-view-cover" />
        <p>{story.content}</p>
      </div>
    </div>
  );
};

export default StoryView;