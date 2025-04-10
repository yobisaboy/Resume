import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

import exe from '../assets/exe.png'; // Import the images
import code from '../assets/code.png';
import play from '../assets/play.png';

import './Games.css'; // Import custom CSS for styling
function Games() {
  // Example data for 8 games (adjust or expand data as needed)
  const games = [
    { id: 1, title: 'Coffee Guru', description: 'A fun action-packed game.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Harmony Heroes', description: 'An exciting adventure game.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Tim Hortons Simulation', description: 'A fast-paced racing game.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Krash Kart', description: 'A strategy game with deep mechanics.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Grim Reaper', description: 'A story-driven RPG.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Cotton Candy', description: 'A puzzle-solving game.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Brave Fox', description: 'An open-world survival game.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Hot Dog Planet', description: 'A thrilling battle royale game.', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">List of Games</h2>
      <p className="text-center mb-5">Explore my games and experience the creativity behind each project!</p>
      
      <div className="row g-2"> {/* 'g-2' reduces the gap between the cards */}
        {games.map((game) => (
          <div key={game.id} className="col-6 col-md-3 mb-4"> {/* 4 cards per row */}
            <div className="card custom-card">
              <img src={game.imageUrl} alt={game.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn">
                    <img src={play} alt="WebGL" className="icon-btn" />
                  </button>
                  <button className="btn">
                    <img src={exe} alt="Download(.exe)" className="icon-btn" />
                  </button>
                  <button className="btn">
                    <img src={code} alt="Unity Project" className="icon-btn" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
