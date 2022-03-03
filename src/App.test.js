// import { rest } from "msw";
// import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "./test-utils";
import App from "./App";

// export const handlers = [
//   rest.get("http://www.omdbapi.com", (req, res, ctx) => {
//     const movieId = req.url.searchParams.getAll("i");
//     const movieKey = req.url.searchParams.getAll("apiKey");
//     const movieSearch = req.url.searchParams.getAll("s");
//     const movieType = req.url.searchParams.getAll("type");

//     return res(
//       ctx.json([
//         {
//           Title: "Harry Potter and the Deathly Hallows: Part 2",
//           Year: "2011",
//           imdbID: "tt1201607",
//           Type: "movie",
//           Poster:
//             "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
//         },
//         {
//           Title: "Harry Potter and the Sorcerer's Stone",
//           Year: "2001",
//           imdbID: "tt0241527",
//           Type: "movie",
//           Poster:
//             "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
//         },
//       ])
//     );
//   }),
// ];

// const server = setupServer(...handlers);

// // Enable API mocking before tests.
// beforeAll(() => server.listen());

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

test("Renders App & fetches API & make a search & fetch the new data & click a card & fetch and render de movie details", async () => {
  render(<App />);
  expect(screen.getAllByText(/movie app/i)[0]).toBeInTheDocument();
  expect(screen.getByRole("loader")).toBeInTheDocument();

  //Make a search
  const searchInput = screen.getByPlaceholderText(/search movies or shows/i)
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, {target: {value: 'star wars'}})
  expect(searchInput.value).toBe('star wars')
  const searchButton = screen.getByRole('search-button')
  fireEvent.click(searchButton)
  expect(searchInput.value).toBe('')
  //Fetch the new search data
  const fetchedMovieBySearch = await screen.findAllByText(/star wars/i)
  expect(fetchedMovieBySearch[2]).toBeInTheDocument()

  //Click a movie card
  const movieCard = await screen.findAllByRole("link-to-movie")
  expect(movieCard[0]).toBeInTheDocument();
  fireEvent.click(movieCard[0])
  //Fetch de movie details data
  const movieinfoSection = await screen.findByRole('movie-info')
  expect(movieinfoSection).toBeInTheDocument()
});