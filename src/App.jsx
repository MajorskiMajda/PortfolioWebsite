import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Project';
import Footer from './Footer';
import About from './About me';
import Skills from './Skills';
import Contact from './Contact';
import CursorFollow from './CursorFollow';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function App() {
  const [texts, setTexts] = useState({
    azureText: "",
    secretsText: "",
    flappyBirdText: "",
    keeperText: "",
    weatherText: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const files = {
      azureText: `${process.env.PUBLIC_URL}/Text/AzureDesc.txt`,
      secretsText: `${process.env.PUBLIC_URL}/Text/SecretsDesc.txt`,
      flappyBirdText: `${process.env.PUBLIC_URL}/Text/FlappyBirdDesc.txt`,
      keeperText: `${process.env.PUBLIC_URL}/Text/KeeperDesc.txt`,
      weatherText: `${process.env.PUBLIC_URL}/Text/WeatherDesc.txt`,
    };

    Promise.all(
      Object.entries(files).map(([key, path]) =>
        fetch(path)
          .then((response) => response.text())
          .then((data) => ({
            key,
            data,
          }))
          .catch((error) => ({
            key,
            error: `Error fetching the file: ${error}`,
          }))
      )
    )
      .then((results) => {
        const newTexts = {};
        results.forEach(({ key, data, error }) => {
          if (data) {
            newTexts[key] = data;
          } else {
            newTexts[key] = error;
          }
        });
        setTexts(newTexts);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main-div'>
      <CursorFollow />
      <Header />
      <Hero />
      <div className='warning' id="portfolio">
        <WarningRoundedIcon />
        <p>Please note that due to the limitations of Render's free-tier hosting, it may take a few minutes for the website to load as the server initializes. Please be patient during this time and request that you do not close the browser window until the site has fully loaded. For more information, please refer to <a className='render-link' href='https://render.com/docs/free'>Render's documentation here</a>. Thank you for your understanding!</p>
      </div>
      <Projects image="https://i.ibb.co/471Znrv/Azure-Project.png" website="https://majorskimajda.github.io/AzureWebShop/" gitRepo="https://github.com/MajorskiMajda/AzureWebShop" name="Jewelry Store" desc={texts.azureText} />
      <Projects image="https://i.ibb.co/cxL47DY/Secrets-Project.png" website="https://secertswebapp.onrender.com" gitRepo="https://github.com/MajorskiMajda/SecertsProject" name="Secrets App" desc={texts.secretsText} />
      <Projects image="https://i.ibb.co/B3pR4ZF/Flappy-Bird-Project.png" website="https://majorskimajda.github.io/FlappyBirdGame/" gitRepo="https://github.com/MajorskiMajda/FlappyBirdGame" name="Flappy Bird Game" desc={texts.flappyBirdText} />
      <Projects image="https://i.ibb.co/QrtfTwk/Keeper-Project.png" website="https://majorskimajda.github.io/KeeperApp/" gitRepo="https://github.com/MajorskiMajda/KeeperApp" name="Keeper App" desc={texts.keeperText} />
      <Projects image="https://i.ibb.co/nfk17yT/Weather-Project.png" website="https://majorskimajda.github.io/Weather/" gitRepo="https://github.com/MajorskiMajda/Weather" name="Weather App" desc={texts.weatherText} />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
