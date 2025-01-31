import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.uSMlvpnWL_3RLx_O-b2LPwHaEo&pid=Api&rs=1&c=1&qlt=95&w=197&h=123",
  },
  {
    id: 2,
    title: "Movie 2",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.F01XIg2UMahGMrZ--RbeqwHaJ6&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "Movie 3",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.MJ8UdVmy7hm6SiBy3rS8pwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "Movie 4",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.A2FoAX5QsKm93P78CfKYEQHaD4&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    title: "Movie 5",
    image:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVysvrvaHP3y_NMP9uCv_qVpE_kj3IOmz3A&s",
  },

  {
    id: 6,
    title: "Movie 6",
    image:
      " data:image/jpeg; base64,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",
  },
  {
    id: 7,
    title: "Movie 7",
    image: "https://via.placeholder.com/200x300?text=Movie+7",
  },
  {
    id: 8,
    title: "Movie 8",
    image: "https://via.placeholder.com/200x300?text=Movie+8",
  },
  {
    id: 9,
    title: "Movie 9",
    image: "https://via.placeholder.com/200x300?text=Movie+9",
  },
  {
    id: 10,
    title: "Movie 10",
    image: "https://via.placeholder.com/200x300?text=Movie+10",
  },
  {
    id: 11,
    title: "Movie 11",
    image: "https://via.placeholder.com/200x300?text=Movie+11",
  },
  {
    id: 12,
    title: "Movie 12",
    image: "https://via.placeholder.com/200x300?text=Movie+12",
  },
  {
    id: 13,
    title: "Movie 13",
    image: "https://via.placeholder.com/200x300?text=Movie+13",
  },
  {
    id: 14,
    title: "Movie 14",
    image: "https://via.placeholder.com/200x300?text=Movie+14",
  },
  {
    id: 15,
    title: "Movie 15",
    image: "https://via.placeholder.com/200x300?text=Movie+15",
  },
  {
    id: 16,
    title: "Movie 16",
    image: "https://via.placeholder.com/200x300?text=Movie+16",
  },
];

const MovieList = () => (
  <div className="grid grid-cols-4 gap-4 p-4">
    {movies.map((movie) => (
      <Link
        key={movie.id}
        to={`/movie/${movie.id}`}
        className="border p-2 text-center"
      >
        <img src={movie.image} alt={movie.title} className="w-full" />
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
      <img src={movie.image} alt={movie.title} className="w-64 mx-auto" />
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
    <form onSubmit={handleSubmit} className="p-4 flex flex-col items-center">
      <input
        type="text"
        name="name"
        placeholder="Name"
        style={{ fontSize: "2vw" }}
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
