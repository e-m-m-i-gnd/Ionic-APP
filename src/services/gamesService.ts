const games = [
    { id: 1, title: 'The Witcher 3', platform: 'PC', imageUrl: '/assets/images/witcher3.jpg' },
    { id: 2, title: 'Cyberpunk 2077', platform: 'PC', imageUrl: '/assets/images/cyberpunk.jpg' },
    { id: 3, title: 'Red Dead Redemption 2', platform: 'PC', imageUrl: '/assets/images/rdr2.jpg' },
  ];
  
  const getGames = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(games);
      }, 1000); // Simula un retraso de 1 segundo para la carga de datos
    });
  };
  
  export default { getGames };
  