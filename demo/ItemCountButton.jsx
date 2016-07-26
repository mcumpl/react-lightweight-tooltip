import React, {PropTypes} from 'react';

const ItemCountButton = ({count, selectedCount, onClick}) => {
  return (
    <button
      disabled={selectedCount === count}
      onClick={() => onClick(count) }
      style={selectedCount === count ? { color: '#d3d3d3' } : {}}
      type="button">
      {count}
    </button>
  );
};

ItemCountButton.propTypes = {
  count: PropTypes.number.isRequired,
  selectedCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemCountButton;
