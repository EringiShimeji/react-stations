// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
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
    <>
      <header className="app__header">Dog アプリ</header>
      <main className="app__main">
        <div className="app__gallery">
          <div className="app__preview">
            <div className="app__description">
              <p>犬の画像を表示するサイトです。</p>
            </div>
            <div className="app__dog-img-container">
              <img className="app__dog-img" src={dogUrl} alt="dog picture" />
            </div>
          </div>
          <div className="app__controller">
            <button className="app__change-dog-button" onClick={handleClick}>
              更新
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
