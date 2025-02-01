import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  redirect,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
 import "./App.css";
  


const movies = [
  {
    id: 1,
    title: "Movie 1",
    image:
      " https://images.indianexpress.com/2023/01/Collage-Maker-03-Jan-2023-02.00-PM.jpg?w=1000%",
  },
  {
    id: 2,
    title: "Movie 2",
    image:
      "  https://igimage.indiaglitz.com/hindi/gallery/movies/tubelight/tubelight_poster.jpg",
  },
  {
    id: 3,
    title: "Movie 3",
    image:
      "   https://igimage.indiaglitz.com/hindi/gallery/movies/sachin-abilliondreams/sachin_poster.jpg",
  },
  {
    id: 4,
    title: "Movie 4",
    image:
      "https://c8.alamy.com/comp/F762X4/indian-bollywood-hindi-film-movie-poster-of-bol-bachchan-a-rohit-shetty-F762X4.jpg",
  },
  {
    id: 5,
    title: "Movie 5",
    image:
      "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WOanFSU2veAIZhax-Ir3mB4IofsN1HjNEw&s",
  },

  {
    id: 6,
    title: "Movie 6",
    image:
      "https://igimage.indiaglitz.com/hindi/gallery/movies/bareillykibarfi/barfi_poster.jpg",
  },
  {
    id: 7,
    title: "Movie 7",
    image:
      " https://igimage.indiaglitz.com/hindi/gallery/movies/commando2/commando_poster.jpg",
  },
  {
    id: 8,
    title: "Movie 8",
    image:
      "https://igimage.indiaglitz.com/hindi/gallery/movies/jollyllb2/jelly_poster.jpg ",
  },
  {
    id: 9,
    title: "Movie 9",
    image:
      " https://igimage.indiaglitz.com/hindi/gallery/movies/raees/raeees_poster.jpg",
  },
  {
    id: 10,
    title: "Movie 10",
    image:
      " https://igimage.indiaglitz.com/hindi/gallery/movies/haraamkhor/haaram_poster.jpg ",
  },
  {
    id: 11,
    title: "Movie 11",
    image:
      "https://igimage.indiaglitz.com/hindi/gallery/movies/theghaziattack/ghazi_poster.jpg",
  },
  {
    id: 12,
    title: "Movie 12",
    image:
      " https://igimage.indiaglitz.com/hindi/gallery/movies/mubarakan/mubarakan_poster.jpg",
  },
  {
    id: 13,
    title: "Movie 13",
    image:
      " https://igimage.indiaglitz.com/hindi/gallery/movies/trapped/trapped_poster.jpg",
  },
  {
    id: 14,
    title: "Movie 14",
    image:
      " https://igimage.indiaglitz.com/hindi/gallery/movies/rangoon/rangoon_poster.jpg",
  },
  {
    id: 15,
    title: "Movie 15",
    image:
      "https://igimage.indiaglitz.com/hindi/gallery/movies/raabta/raaabta_poster.jpg ",
  },
  {
    id: 16,
    title: "Movie 16",
    image:
      " https://igimage.indiaglitz.com/hindi/gallery/movies/bankchor/bank_poster.jpg",
  },
];

const MovieList = () => (
  <div style={{marginLeft:20, textAlign:"center", fontSize:50}} className="grid grid-cols-4 gap-4 p-4">
    {   movies.map((movie) => (
      <Link
        key={movie.id}
        to={`/movie/${movie.id}`}
        className="border p-2 text-center"
      >
        <img style={{width:"90vw", height:600, margin:0, padding:20}} src={movie.image} alt={movie.title} className="w-full" />
        <h3>{movie.title}</h3>
      </Link>
    ))}
  </div>
);

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();

  return movie ? (
    <div className="p-4 text-center">
      <img
        style={{ width: "90vw", height: 600, margin: 0, padding: 20 }}
        src={movie.image}
        alt={movie.title}
        className="w-64 mx-auto"
      />
      <h2>{movie.title}</h2>
      <button
        onClick={() => navigate(`/book/${id}`)}
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Book Seat
      </button>
    </div>
  ) : (
    <p>Movie not found</p>
  );
};

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/confirmation/${uuidv4()}`, { state: form });
  };

  return (
    <form style={{textAlign:"center", backgroundColor:"aqua", padding:50, margin:10}} onSubmit={handleSubmit} className="p-4 flex flex-col items-center">
      <input  
        type="text"
        name="name"
        placeholder="Name"
        style={{ fontSize: "2vw"}}
        value={form.name}
        onChange={handleChange}
        className="border p-2 m-2"
        required
      />
      <br></br>
      <input
        type="email"
        name="email"
        placeholder="Email"
        style={{ fontSize: "2vw" }}
        value={form.email}
        onChange={handleChange}
        className="border p-2 m-2"
        required
      />
      <br></br>
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile"
        style={{ fontSize: "2vw" }}
        value={form.mobile}
        onChange={handleChange}
        className="border p-2 m-2"
        required
      />
      <br></br>
      <button
        type="submit"
        className="bg-green-500 text-white p-2"
        style={{
          fontSize: "2vw",
          color: "red",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

const Confirmation = ({ location }) => {
  const { id } = useParams();
  const state = location?.state;

  return state ? (
    <div className="p-4 text-center">
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {id}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  ) : (
    <p>Error: No booking details found.</p>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/confirmation/:id" element={<Confirmation />} />
    </Routes>
  </Router>
);

export default App;
