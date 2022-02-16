import React, { useState } from 'react';
import DogPreview from '../../components/molecules/DogPreview';

/**
 * @type {React.FC}
 */
const EnhancedDogPreview = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  );

  const handleClick = async () => {
    /**
     * @type {{ message: string, status: "success" | "error" }}
     */
    const { message: newDogUrl, status: apiResponse } = await fetch(
      'https://dog.ceo/api/breeds/image/random',
    )
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          // ステータスコードが200以外ならエラーとする
          return {
            message: '',
            status: 'error',
          };
        }
      })
      .catch(() => ({ message: '', status: 'error' }));

    if (apiResponse !== 'success') return;

    setDogUrl(newDogUrl);
  };

  return <DogPreview dogUrl={dogUrl} onButtonClick={handleClick} />;
};

export default EnhancedDogPreview;
