import React from 'react';
import './App.css'

function App() {
    const { useState } = React;

    const App = () => {
        const [sidebarOpen, setSidebarOpen] = useState(true)
    }


  return (
    <div className="flex">
    {/* Sidebar */}
    {sidebarOpen && (
        <div className="w-1/6 bg-black p-4">
            <div className="flex items-center mb-6">
                <i className="fab fa-youtube text-red-600 text-3xl"></i>
                <span className="text-xl font-bold ml-2">YouTube</span>
                <span className="text-xs ml-1">PK</span>
            </div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4 sidebar-link">
                    <i className="fas fa-home text-xl"></i>
                    <span>Home</span>
                </div>
                <div className="flex items-center space-x-4 sidebar-link">
                    <i className="fas fa-video text-xl"></i>
                    <span>Shorts</span>
                </div>
                <div className="flex items-center space-x-4 sidebar-link">
                    <i className="fas fa-tv text-xl"></i>
                    <span>Subscriptions</span>
                </div>
                <div className="flex items-center space-x-4 sidebar-link">
                    <i className="fas fa-user text-xl"></i>
                    <span>You</span>
                </div>
                <div className="flex items-center space-x-4 sidebar-link">
                    <i className="fas fa-history text-xl"></i>
                    <span>History</span>
                </div>
                <div className="mt-6">
                    <button className="bg-blue-600 px-4 py-2 rounded">Sign in</button>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-bold mb-4">Explore</h2>
                <div className="space-y-2">
                    <div className="flex items-center space-x-4 sidebar-link">
                        <i className="fas fa-fire text-xl"></i>
                        <span>Trending</span>
                    </div>
                    <div className="flex items-center space-x-4 sidebar-link">
                        <i className="fas fa-music text-xl"></i>
                        <span>Music</span>
                    </div>
                    <div className="flex items-center space-x-4 sidebar-link">
                        <i className="fas fa-gamepad text-xl"></i>
                        <span>Gaming</span>
                    </div>
                    <div className="flex items-center space-x-4 sidebar-link">
                        <i className="fas fa-newspaper text-xl"></i>
                        <span>News</span>
                    </div>
                </div>
            </div>
        </div>
    )}
    {/* Main Content */}
    <div className={`flex-1 p-4 ${sidebarOpen ? 'w-5/6' : 'w-full'}`}>
        <div className="flex items-center mb-4">
            <button 
                className="bg-gray-700 px-4 py-2 rounded mr-4"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <i className={`fas ${sidebarOpen ? 'fa-bars' : 'fa-times'} text-xl`}></i>
            </button>
            <div className="flex items-center space-x-4">
                <button className="bg-gray-700 px-4 py-2 rounded">All</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Music</button>
                <button className="bg-gray-700 px-4 py-2 rounded">T-Series</button>
                <button className="bg-gray-700 px-4 py-2 rounded">News</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Gaming</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Pakistani dramas</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Live</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Indian pop music</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Jukebox</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Religious recitation</button>
                <button className="bg-gray-700 px-4 py-2 rounded">Qawwali music</button>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <div className="relative">
                    <img src="https://placehold.co/600x300" alt="Main video thumbnail" className="rounded-lg"/>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">0:00</div>
                </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <img src="https://placehold.co/300x150" alt="Ad thumbnail" className="rounded-lg mb-4"/>
                <div className="text-blue-500">TECNO SPARK 30 PRO</div>
                <div className="text-gray-400">Sponsored - TECNO Mobile Pakistan</div>
                <button className="bg-blue-600 px-4 py-2 rounded mt-2">Learn More</button>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-800 p-4 rounded-lg">
                <img src="https://placehold.co/300x150" alt="Video thumbnail 1" className="rounded-lg mb-4"/>
                <div className="text-white">Kabhi Main Kabhi Tum Episode 30</div>
                <div className="text-gray-400">40:42</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <img src="https://placehold.co/300x150" alt="Video thumbnail 2" className="rounded-lg mb-4"/>
                <div className="text-white">India 'A' vs Pakistan 'A' | Men's T20</div>
                <div className="text-gray-400">10:41</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <img src="https://placehold.co/300x150" alt="Video thumbnail 3" className="rounded-lg mb-4"/>
                <div className="text-white">BGMI NEW MODE 3 UPDATED</div>
                <div className="text-gray-400">34:34</div>
            </div>
        </div>
    </div>
</div>
);
};

 

export default App
