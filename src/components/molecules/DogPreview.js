import PropTypes from 'prop-types';
import React from 'react';
import './DogPreview.css';

/**
 * @type {React.FC}
 *
 * @param {{ dogUrl: string, onButtonClick: () => void }} props
 */
const DogPreview = ({ dogUrl, onButtonClick }) => (
  <div className="dog-preview-container">
    <img className="dog-preview-img" src={dogUrl} alt="Dog image" />
    <button className="dog-preview-button" onClick={onButtonClick}>
      更新
    </button>
  </div>
);

DogPreview.propTypes = {
  dogUrl: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default DogPreview;
