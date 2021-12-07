import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
  RssIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 text-sm p-5 border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex space-x-2 hover:text-white items-center">
          <HomeIcon className="h-5 w-5" />
          <p> Home </p>
        </button>
        <button className="flex space-x-2 hover:text-white items-center">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex space-x-2 hover:text-white items-center">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex space-x-2 hover:text-white items-center">
          <PlusCircleIcon className="h-5 w-5" />
          <p> Create your Playlist </p>
        </button>
        <button className="flex space-x-2 hover:text-white items-center">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex space-x-2 hover:text-white items-center">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist */}

        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  );
}

export default Sidebar;
