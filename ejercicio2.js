const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];

  const menores = [];
  const mayores = [];
  
    for (const year of movies) {
      if(year.releaseYear < 2000) {
          menores.push(year);   
      }
      else {
          mayores.push(year);
      }
  }
  
  console.log('Anteriores a los 2000', menores);
  console.log('Posteriores a los 2000', mayores);
  