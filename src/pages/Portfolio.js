import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import PortfolioItem from '../components/PortfolioItem'

const client = createClient({
  space: 'jg8hpi7zbiv7',
  accessToken: 'xRdx3naNzka1Dl8bmWXxfagB84MucwvNK0YR43sBy4w',
});

function Portfolio() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [includes, setIncludes] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const response = await client.getEntries({
          content_type: 'portfolioImages',
          include: 10
        });
        setPortfolioItems(response.items);
        setIncludes(response.includes || {});
      };
  
      fetchData();
    }, []);

    return (
        <div className="container">
        <h2>My Portfolio</h2>
        {portfolioItems.length > 0 ? (
            <ul className="row">
                {portfolioItems.map((item) => (
                    <PortfolioItem key={item.sys.id} item={item} includes={includes}/>
                ))}
            </ul>
            ) : (
            <p>Loading portfolio items...</p>
        )}
      </div>
    );
}

export default Portfolio;