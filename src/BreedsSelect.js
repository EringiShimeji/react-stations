import React from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param {{ breeds: string[], selectedBreed: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }} props
 * @returns
 */
const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  return (
    <select
      name="breed"
      id="breed-select"
      value={selectedBreed}
      onChange={onChange}
    >
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedBreed: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default BreedsSelect
