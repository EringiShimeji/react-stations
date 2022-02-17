import React from 'react'
import PropTypes from 'prop-types'

/**
 * @type {React.FC}
 *
 * @param {{ url: string }} props
 */
const DogImage = ({ url }) => (
  <div className="dog-img-container">
    <img className="dog-img__img" src={url} alt="dog picture" />
  </div>
)

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
}

export default DogImage
