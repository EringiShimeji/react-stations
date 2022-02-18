import React, { useEffect, useState } from 'react'

const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

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

  return <div />
}

export { DogListContainer }
