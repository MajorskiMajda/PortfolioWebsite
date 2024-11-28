import React, { useState } from 'react';

export default function Skills() {
    const [expandedIndex, setExpandedIndex] = useState(null);


    const truncateText = (text) => {
        return text.length > 120 ? text.slice(0, 120) + '...' : text;
    };

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); 
    };

    const skills = [
        {
            title: "Web Design",
            image: "https://i.ibb.co/ZXTgwxF/web-design.png",
            description: "I focus on creating visually compelling and user-friendly websites. I prefer clean and minimalistic design with eye-catching animations for my projects. With my knowledge of HTML and CSS and UX I am able to create responsive websites that are always centered on the user."
        },
        {
            title: "Graphic Design",
            image: "https://i.ibb.co/k1JpNQT/graphic.png",
            description: "I have several years of experience as a graphic designer. I am well familiar with Adobe Photoshop, Adobe Illustrator and Core DRAW."
        },
        {
            title: "Frontend Development",
            image: "https://i.ibb.co/dgWfgkk/front.png",
            description: "I use modern front-end technologies like JavaScript, as well as frameworks like React, Bootstrap, Material UI and more. I prioritize clean, efficient code and follow best practices to create fast-loading, accessible, and mobile-friendly websites."
        },
        {
            title: "Backend Development",
            image: "https://i.ibb.co/LxRzQjj/backend.png",
            description: "I am familiar with server-side languages and technologies like Node.js, Express, EJS, MongoDB, Mongoose, making smooth integration between the front-end and back-end components. By using technologies like Node.js and frameworks like Express, I create APIs that handle everything from data requests to authentication."
        }
    ];

    return (
        <>
            <div className='services-div'>
                <h4 className='what'>WHAT I DO</h4>
                <h1 className='services'>Services</h1>
            </div>
            <div className='yy'>
                {skills.map((skill, index) => (
                    <div key={index} className='skill-card'>
                        <img src={skill.image} alt={skill.title} />
                        <h3>{skill.title}</h3>
                        <p>
                            {expandedIndex === index
                                ? skill.description
                                : truncateText(skill.description)}

                            <button
                                onClick={() => toggleExpand(index)}
                                style={{
                                    color: '#00c3ff',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >

                                {expandedIndex === index ? 'Read Less' : 'Read More'}
                            </button>
                        </p>
                    </div>
                ))}
            </div >
        </>
    );
}
