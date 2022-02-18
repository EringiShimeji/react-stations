import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()

  /**
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  const handleBreedsSelectChange = e => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    const fetchBreeds = async () => {
      const apiResponse = await fetch(
        'https://dog.ceo/api/breeds/list/all',
      ).then(r => r.json())
      const newBreeds = Object.keys(apiResponse.message)

      setBreeds(newBreeds)
    }

    fetchBreeds()
  }, [])

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleBreedsSelectChange}
      />
    </div>
  )
}

export { DogListContainer }
