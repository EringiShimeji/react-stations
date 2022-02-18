import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()
  const [certainBreedUrls, setCertainBreedUrls] = useState([])

  /**
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  const handleBreedsSelectChange = e => {
    setSelectedBreed(e.target.value)
  }

  const handleClick = async () => {
    if (!selectedBreed) return

    const apiResponse = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/3`,
    ).then(r => r.json())

    if (apiResponse.status !== 'success') return

    const newCertainBreedUrls = apiResponse.message

    setCertainBreedUrls(newCertainBreedUrls)
  }

  useEffect(() => {
    const fetchBreeds = async () => {
      const apiResponse = await fetch(
        'https://dog.ceo/api/breeds/list/all',
      ).then(r => r.json())

      if (apiResponse.status !== 'success') return

      const newBreeds = Object.keys(apiResponse.message)

      setBreeds(newBreeds)
      setSelectedBreed(newBreeds[0])
    }

    fetchBreeds()
  }, [])

  return (
    <div className="dog-list-container">
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleBreedsSelectChange}
      />
      <button onClick={handleClick}>表示</button>
      <div className="dog-list-container__breed-img-container">
        {certainBreedUrls.map(url => (
          <img key={url} src={url} alt={`${selectedBreed} image`} />
        ))}
      </div>
    </div>
  )
}

export default DogListContainer
