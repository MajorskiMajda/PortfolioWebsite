import React, { useState } from 'react';

export default function Projects(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedDesc = props.desc.slice(0, 300);
  const fullDesc = props.desc;


  const showReadMore = fullDesc.length > 250;

  const handleToggle = () => {
    setIsExpanded(!isExpanded); 
  };

  return (
    <div className='card'>
      <img alt='project' src={props.image} />
      <div className='text'>
        <h2>{props.name}</h2>
        <p className='paragraphs'>
          {isExpanded || !showReadMore ? fullDesc : truncatedDesc}
          {showReadMore && (
            <span onClick={handleToggle} className="read-more">
              {isExpanded ? ' Read less' : ' Read more'}
            </span>
          )}
        </p>
        <div className='links'>
          <a href={props.website} className='link-btn' target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
          <a href={props.gitRepo} className='link-btn' target="_blank" rel="noopener noreferrer">
            Git Repository
          </a>
        </div>
      </div>
    </div>
  );
}

