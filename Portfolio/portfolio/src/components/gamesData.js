// gamesData.js
import coffeeguru from '../assets/coffeeguru.png';
import harmonyheroes from '../assets/harmonyheroes.png';
import timhortons from '../assets/timhortons.png';
import krashkart from '../assets/krashkart.png';
import grimreaper from '../assets/grimreaper.png';
import cottoncandy from '../assets/cottoncandy.png';
import bravefox from '../assets/bravefox.png';
import hotdogplanet from '../assets/hotdogplanet.png';

const games = [
    { 
      id: 1, 
      title: 'Coffee Guru', 
      year: 2025, 
      description: '☕ A cozy coffee-making simulator.', 
      image: coffeeguru,
      webgl: 'https://yobisaboy.itch.io/la-la-latte-coffee-guru', 
      exe: 'https://github.com/yobisaboy/CoffeeGuru', 
      unity: 'https://github.com/yoyohohoh/COMP395_GroupProject/tree/game' 
    },
    { 
      id: 2, 
      title: 'Harmony Heroes', 
      year: 2025, 
      description: '🎵 A turn-based rhythm battle game.', 
      image: harmonyheroes,
      webgl: 'https://yobisaboy.itch.io/harmony-heroes', 
      exe: 'https://github.com/yobisaboy/HarmonyHeros', 
      unity: 'https://github.com/CR3XX12/COMP390_001_HarmonyHero' 
    },
    { 
      id: 3, 
      title: 'Tim Hortons Simulation', 
      year: 2025, 
      description: '📊 An M/M/1 queue system simulation of Tim Hortons developed in Unity.',
      image: timhortons, 
      webgl: 'https://yobisaboy.itch.io/tim-hortons-simulation', 
      exe: 'https://github.com/yobisaboy/TimHortonsSimulation', 
      unity: 'https://github.com/yoyohohoh/COMP395_GroupProject/tree/simulations' 
    },
    { 
      id: 4, 
      title: 'Krash Kart', 
      year: 2024, 
      description: '🏎️ A 2-player car racing game developed in Unity.',
      image: krashkart, 
      webgl: 'https://yobisaboy.itch.io/krash-kart', 
      exe: 'https://github.com/yobisaboy/KrashKart', 
      unity: 'https://github.com/yoyohohoh/COMP396_FinalProject' 
    },
    { 
      id: 5, 
      title: 'Grim Reaper', 
      year: 2024, 
      description: '💀 A single-player Android mobile platform game developed in Unity.',
      image: grimreaper, 
      webgl: 'https://yobisaboy.itch.io/grim-reaper-pc', 
      exe: 'https://github.com/yobisaboy/GrimReaper', 
      unity: 'https://github.com/yoyohohoh/comp290_project' 
    },
    { 
      id: 6, 
      title: 'Cotton Candy', 
      year: 2023, 
      description: '🍬 A single/multiplayer 2D platform game developed in Unity.',
      image: cottoncandy, 
      webgl: 'https://yobisaboy.itch.io/cotton-candy', 
      exe: 'https://github.com/yobisaboy/CottonCandy', 
      unity: 'https://github.com/yoyohohoh/comp305assignment2' 
    },
    { 
      id: 7, 
      title: 'Brave Fox', 
      year: 2023, 
      description: '🦊 A simple 2D Unity game.',
      image: bravefox, 
      webgl: 'https://yobisaboy.itch.io/brave-fox', 
      exe: 'https://github.com/yobisaboy/BraveFox', 
      unity: 'https://github.com/yoyohohoh/comp305assignment1' 
    },
    { 
      id: 8, 
      title: 'Hot Dog Planet', 
      year: 2022, 
      description: '🌭 A single-player 2D game inspired by the classic Space Invaders.',
      image: hotdogplanet, 
      webgl: 'https://yobisaboy.itch.io/hot-dog-planet', 
      exe: 'https://github.com/yobisaboy/HotDogPlanet', 
      unity: ''  // No Unity project provided
    },
  ];
  
  export default games;
  