import React, { useState } from 'react'
import { DogImage } from './DogImage'

const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dachshund/puppy-1006024_640.jpg',
  )

  const handleClick = async () => {
    const randomDogUrl = await fetch(
      'https://dog.ceo/api/breeds/image/random',
    ).then(r => r.json())

    if (randomDogUrl.status !== 'success') return

    setDogUrl(randomDogUrl.message)
  }

  return (
    <div className="description-container">
      <div className="description__sentence-container">
        <p className="description__sentence">犬の画像を表示するサイトです。</p>
      </div>
      <div className="description__img-container">
        <DogImage url={dogUrl} />
        <button className="description__button" onClick={handleClick}>
          更新
        </button>
      </div>
    </div>
  )
}

export { Description }
