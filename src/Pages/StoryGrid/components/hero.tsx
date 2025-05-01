import React, { useState, useEffect } from "react";

// Define interfaces for API response
interface StoryType {
  id: number;
  name: string;
  description?: string;
  emoji?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StoryTypeResponse {
  data: StoryType[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface HeroProps {
  onSearchQueryChange: (query: string) => void;
}

export default function Hero({ onSearchQueryChange }: HeroProps) {
  const [storyTypes, setStoryTypes] = useState<StoryType[]>([]);
  // Removed unused loading state
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch Story Types on mount
  useEffect(() => {
    const fetchStoryTypes = async () => {
      // Removed loading state update
      try {
        const response = await fetch(
          "https://group1.psewmad.org/api/story-types"
        );
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const data: StoryTypeResponse = await response.json();
        setStoryTypes(data.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch story types:", err);
        setError("Failed to load story types. Please try again later.");
      }
    };

    fetchStoryTypes();
  }, []);

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Set the search query locally
  };

  const handleSearchButtonClick = () => {
    onSearchQueryChange(searchQuery); // Trigger search when button is clicked
  };

  return (
    <section>
      <div className="p-4">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 p-6">
          {/* Search Input and Button */}
          <div className="w-full sm:w-[500px] relative flex">
            <input
              type="text"
              placeholder="🔍 Search stories..."
              onChange={handleSearchQueryChange}
              className="w-full bg-pink-100 text-pink-700 rounded-l-full border-2 border-pink-400 
                     px-5 py-2 shadow-lg font-[Pacifico] text-lg
                     focus:outline-none focus:ring-4  transition-all duration-200 appearance-none"
            />

            <button
              onClick={handleSearchButtonClick}
              className="bg-pink-500 text-white rounded-r-full px-6 py-2 font-semibold shadow-lg transition-all duration-200 hover:bg-pink-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="text-center p-4 text-red-500 font-semibold">
          {error}
        </div>
      )}

      {/* Story Types */}
      <div className="p-4">
        {storyTypes.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {storyTypes.map((story) => (
              <li
                key={story.id}
                className="bg-pink-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-pink-700">
                  {story.name}
                </h3>
                {story.description && (
                  <p className="text-sm text-pink-600">{story.description}</p>
                )}
                {story.emoji && <span className="text-2xl">{story.emoji}</span>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-pink-500">No stories available.</p>
        )}
      </div>
    </section>
  );
}
