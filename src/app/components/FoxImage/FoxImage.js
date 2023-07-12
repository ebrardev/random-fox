"use client"
import { useState, useEffect } from 'react';
import './style.css';
async function fetchRandomFoxImage() {
    const response = await fetch(
        `https://api.unsplash.com/photos/random?query=fox&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    );
    const data = await response.json();
    return data.urls.regular;
  }
  

function FoxImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomFox();
  }, []);

  const fetchRandomFox = async () => {
    try {
      const imageUrl = await fetchRandomFoxImage();
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching random fox image:', error);
    }
  };

  return (
    <div>
      <img src={imageUrl} alt="Random Fox" />
    </div>
  );
}

export default FoxImage;
