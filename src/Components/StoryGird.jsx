import React from 'react';

const StoryGrid = ({ stories, onSelectStory }) => {
  return (
    <div className="story-grid">
      {stories.map((story) => (
        <div
          key={story.id}
          className="story-card"
          onClick={() => onSelectStory(story)}
        >
          <img src={story.cover} alt={story.title} className="story-cover" />
          <div className="story-info">
            <h3 className="story-title">{story.title}</h3>
            <p className="story-author">by {story.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryGrid;