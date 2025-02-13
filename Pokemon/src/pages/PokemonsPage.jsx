import React, { useState } from "react";
import PokemonItem from "../components/PokemonItem";
import { useSelector } from "react-redux";

const ITEMS_PER_PAGE = 8;

const PokemonsPage = () => {
  const pokemons = useSelector((state) => state.pokemon.pokemons) || [];
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(pokemons.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedPokemons = pokemons.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm mb-10">
        <div className="mt-10 flex px-4 py-4 rounded-lg bg-gray-100 overflow-hidden w-1/3 mb-6">
          <input
            type="text"
            placeholder="Search Something..."
            className="w-full outline-none bg-transparent text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="20px"
            className="cursor-pointer fill-gray-400">
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {displayedPokemons.map((pokemon) => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>

      <ul className="flex space-x-5 justify-center font-[sans-serif] mb-14">
        {/* Previous Button */}
        <li
          onClick={
            currentPage > 1 ? () => handlePageChange(currentPage - 1) : null
          }
          className={`flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-gray-400"
            viewBox="0 0 55.753 55.753">
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </li>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold px-[13px] h-9 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "border text-gray-800 hover:border-blue-500"
            }`}>
            {index + 1}
          </li>
        ))}

        {/* Next Button */}
        <li
          onClick={
            currentPage < totalPages
              ? () => handlePageChange(currentPage + 1)
              : null
          }
          className={`flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-gray-400 rotate-180"
            viewBox="0 0 55.753 55.753">
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default PokemonsPage;
