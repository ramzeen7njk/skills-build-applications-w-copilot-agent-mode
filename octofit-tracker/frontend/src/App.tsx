import { Link, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p className="lead">Modern multi-tier fitness tracking with React, Vite, Node, Express, and MongoDB.</p>
      <p>Use the backend API on port 8000 and the frontend on port 5173.</p>
    </div>
  )
}

function About() {
  return (
    <div className="container py-5">
      <h2>About</h2>
      <p>The OctoFit Tracker app is a modern multi-tier starter for user profiles, activity tracking, and leaderboards.</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">OctoFit</Link>
          <div>
            <Link className="nav-link d-inline text-white" to="/about">About</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
