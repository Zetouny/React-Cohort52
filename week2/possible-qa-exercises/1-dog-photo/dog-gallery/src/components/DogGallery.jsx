import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import DogPhoto from "./DogPhoto.jsx";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);

  async function getDogPhoto() {
    try {
      const fetchDogPhoto = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      if (!fetchDogPhoto) {
        throw Error(`Unable to fetch date: ${fetchDogPhoto.status}`);
      }

      const dogPhoto = await fetchDogPhoto.json();

      setDogPhotos([...dogPhotos, dogPhoto.message]);
      console.log(dogPhotos);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {}, [dogPhotos]);

  return (
    <>
      <Button getDogPhoto={getDogPhoto} />

      {dogPhotos.length != 0 ? (
        <div className="gallery">
          {dogPhotos.map((photo) => (
            <DogPhoto src={photo} />
          ))}
        </div>
      ) : (
        <p>Get your first dog by clicking the button!</p>
      )}
    </>
  );
}

export default DogGallery;
