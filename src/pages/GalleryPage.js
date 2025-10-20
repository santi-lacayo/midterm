import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import ArtCard from '../components/Card';
import { ARTWORKS } from '../data/CardData';


const GalleryPage = () => {
  const [sortBy, setSortBy] = useState(null); // keeps track of selected dropdown option

  // options available to use for my sort dropdown
  const SORT_OPTIONS = [
    { label: 'Name', value: 'name' },
    { label: 'Price', value: 'price' },
  ];

  // I used chat GPT to know how to compare texts and numbers froms my cards
  const sortedArtworks = [...ARTWORKS].sort((a, b) => {
    if (sortBy?.value === 'name') return a.title.localeCompare(b.title);
    if (sortBy?.value === 'price') return a.price - b.price;
    return 0;
  });
  return (
    <div className="p-6 text-gray-800 relative">
      <div className="flex justify-between items-center mb-6 relative z-50">
        <h1 className="text-2xl font-bold">Explore Our Collection</h1>

        <div className="flex items-center space-x-2">
          <span className="font-medium">Sort by:</span>
          {/* add a dropdown from my compnents and assign the sort to it */}
          <Dropdown
            options={SORT_OPTIONS}
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
        {/* map through each card to create a sliding card set */}
        {sortedArtworks.map((piece) => (
          <div key={piece.id} className="flex-shrink-0">
            <ArtCard art={piece} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
