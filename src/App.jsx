import React, { useState } from 'react';
import Sidebar from './Components/Sidebar.jsx';
import StoryGrid from './Components/StoryGird.jsx';
import StoryView from './Components/StoryView.jsx';
import './App.css';
import Buttabomma from "./Stories/Buttabomma.jsx"
import DanceWithGhost  from './Stories/DanceWithGhost.jsx';
import BlueBoy from './Stories/BlueBoy.jsx';
import KillMeSoftly from './Stories/KillMeSoftly.jsx';
import IfGodExists from './Stories/IfGodExists.jsx';

// --- Mock Data for Stories ---
// In a real app, you would fetch this from an API.
const storiesData = [
  {
    id: 1,
    title: 'Buttabomma',
    author: 'Manoj',
    cover: 'https://placehold.co/300x400/7B68EE/FFFFFF?text=Buttabomma',
    content: Buttabomma,
  },
  {
    id: 2,
    title: 'Dance With Ghost',
    author: 'Manoj',
    cover: 'https://placehold.co/300x400/FFA07A/FFFFFF?text=DanceWithGhost',
    content: DanceWithGhost,
  },
  {
    id: 3,
    title: 'Blue Boy',
    author: 'Manoj',
    cover: 'https://placehold.co/300x400/20B2AA/FFFFFF?text=BlueBoy',
    content: BlueBoy,
  },
  {
    id: 4,
    title: 'Kill Me Softly',
    author: 'Manoj',
    cover: 'https://placehold.co/300x400/DC143C/FFFFFF?text=KillMeSoftly',
    content: KillMeSoftly,
  },
   {
    id: 5,
    title: 'If God Exists',
    author: 'Manoj',
    cover: 'https://placehold.co/300x400/66e0FF/FFFFFF?text=If God Exists',
    content: IfGodExists,
  },
];

function App() {
  // State to keep track of the selected story. null means no story is selected.
  const [selectedStory, setSelectedStory] = useState(null);

  const handleSelectStory = (story) => {
    setSelectedStory(story);
  };

  const handleBackToGrid = () => {
    setSelectedStory(null);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1 className="main-title">Ink & Imagination</h1>
        <p className='description'>
         <b des_first>D</b>ive into a world where every story has a soul, every character has a heartbeat, and every page pulls you deeper into the unexpected. From chilling mysteries to heartfelt journeys, our collection is crafted to keep you hooked, inspired, and wanting more.

This isn’t just reading – it’s an experience.
        </p>
        {selectedStory ? (
          // If a story is selected, show the StoryView
          <StoryView story={selectedStory} onBack={handleBackToGrid} />
        ) : (
          // Otherwise, show the StoryGrid
          <StoryGrid stories={storiesData} onSelectStory={handleSelectStory} />
        )}
      </main>
    </div>
  );
}

export default App;