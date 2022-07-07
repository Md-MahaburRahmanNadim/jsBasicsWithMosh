const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

/**
 * all the movies in 2018 with rating > 4
 * sort them by their rating (descending order)
 * pick their title and show it
 */

const title = movies
  .filter(sinObj => {
    return sinObj.year === 2018;
  })
  .sort((a, b) => b.rating - a.rating)
  .map(value => value.title)
  .join("\n");

console.log(title);
