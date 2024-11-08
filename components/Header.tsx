"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import trello from "@/public/assets/Imagine.jpg"

import fetchSuggestion from "@/lib/fetchSuggestion";
function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  useEffect(() => {
    if (board.columns.size === 0) return;
    setLoading(true);

    const fetchSuggestionFunc = async () => {
      const suggestion = await fetchSuggestion(board);
      setSuggestion(suggestion ?? "Loading...");
      setLoading(false);
    };

    fetchSuggestionFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <div
          className="absolute
                        top-0
                        left-0
                        w-full
                        h-96
                        bg-header
                        rounded-md
                       
                        blur-3xl
                        opacity-50
                        -z-10

                        "
        />

        <Image
          src = {trello}
          alt="Trello Logo"
          width={100}
          height={100}
          className="pb-10 md:pb-0 object-contain rounded-md"
        />

        <div className="flex items-center space-x-5 flex-1  justify-end w-full">
          {/*Search Box */}

          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Mihir U" round size="50" color="#0855D1" />
        </div>
      </div>


      <div className="flex items-center justify-center px-5 py-2 md:py-5">
      <p className="flex items-center p-5 text-m font-light pr-5 shadow-xl rounded-xl w-fit bg-white bold max-w-3xl text-[#000000]">
        <UserCircleIcon
          className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${
            loading && "animate-spin"
          }`}
        />
        {suggestion && !loading
          ? suggestion
          : "GPT Summary, coming soon..."}
      </p>
    </div>
    </header>
  );
}

export default Header;
