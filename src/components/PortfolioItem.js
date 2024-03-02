import React from 'react';

function PortfolioItem({ item, includes }) {
    const image = findImageInIncludes(item.fields.images[0].sys.id, includes);
  
    return (
      <li className="col-md-4 mb-3">
        <h3>{item.fields.title}</h3>
        <p>{item.fields.description}</p>
        {image && ( // Check if image is found
          <img
            src={image.fields.file.url}
            alt={item.fields.title}
            className="img-fluid"
          />
        )}
      </li>
    );
  }
  
  function findImageInIncludes(imageId, includes) {
    if (!includes || !includes.Asset) return null; // Early return if includes is missing
  
    const matchingAsset = includes.Asset.find(
      (asset) => asset.sys.id === imageId
    );
  
    return matchingAsset;
}

export default PortfolioItem;