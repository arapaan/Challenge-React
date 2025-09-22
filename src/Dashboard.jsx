import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
    const movies = [
    { id: 1, title: "Maryam", img: "https://via.placeholder.com/200x300?text=Maryam" },
    { id: 2, title: "Tharae", img: "https://via.placeholder.com/200x300?text=Tharae" },
    { id: 3, title: "XXI Cafe", img: "https://via.placeholder.com/200x300?text=XXI+Cafe" },
    { id: 4, title: "Film Lain", img: "https://via.placeholder.com/200x300?text=Film+Lain" },
  ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow">
        <h1 className="text-2xl text-black font-bold">AniWatch</h1>
        <div className="space-x-4">
          <h1 className="text-2xl text-black font-bold">Welcome (nama user)</h1>
        </div>
      </header>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Cari film atau bioskop"
          className="w-full px-4 py-2 border rounded-full shadow-sm"
        />
      </div>

      {/* Menu */}
      <div className="grid grid-cols-4 gap-4 px-4 py-2 text-center">
        <div>
          <div className="w-12 h-12 bg-yellow-300 rounded-full mx-auto">
            
          </div>
          <p className="mt-2 text-sm">Bioskop</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-green-300 rounded-full mx-auto"></div>
          <p className="mt-2 text-sm">Film</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-red-300 rounded-full mx-auto"></div>
          <p className="mt-2 text-sm">M.Food</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto"></div>
          <p className="mt-2 text-sm">Sewa Tempat</p>
        </div>
      </div>

      {/* Scrollable Film List */}
      <h2 className="text-lg font-semibold px-4 mt-6">Lagi Tayang</h2>
      <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-48">
            <img
              src={movie.img}
              alt={movie.title}
              className="rounded-lg shadow"
            />
            <p className="mt-2 text-center text-sm">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Dashboard