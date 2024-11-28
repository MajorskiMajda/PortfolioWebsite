import React, { useState, useEffect } from 'react';

export default function About() {
    const [abouMeTxt, setAboutMeTxt] = useState('');

    useEffect(() => {
        fetch('./Text/AboutMe.txt')
            .then(response => response.text())
            .then((data) => {
                setAboutMeTxt(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const TruncatedText = ({ abouMeTxt }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        const truncatedText = abouMeTxt.length > 300 ? abouMeTxt.slice(0, 300) + '...' : abouMeTxt;
        const toggleText = () => setIsExpanded(!isExpanded);

        return (
            <div>
                <p className="paragraphs about-para">
                    {isExpanded ? abouMeTxt : truncatedText}
                    {abouMeTxt.length > 300 && (
                        <button
                            onClick={toggleText}
                            style={{
                                color: '#00c3ff',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                marginLeft: '5px',
                                padding: '0',
                                fontSize: 'inherit',
                            }}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </p>
            </div>
        );
    };

    return (
        <div id="about" className="abt">
            <div className="about-div">
                <h1>About <span>Me</span></h1>
                <TruncatedText abouMeTxt={abouMeTxt} />
                <h1>Skills</h1>
                <div className="pngs-div">
                    <img alt="skil" className="skil" src="https://i.ibb.co/NmnMvks/Node-js.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/1r5M5vW/NPM.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/cCsFHPw/Mongoose-js.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/DLh5qsy/Java-Script.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/t4LM9DY/javasc.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/jgfMLfD/html.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/K0nbZww/Express.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/NpPMM2r/EJS.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/0ByCm5z/css.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/hBV9MTL/bootstrap.png" />
                    <img alt="skil" className="skil" src="https://i.ibb.co/R7LHWGk/MongoDB.png" />
                </div>
            </div>
            <img className="myimg" alt="me" src="https://i.ibb.co/W055SbB/me.png" />
        </div>
    );
}
