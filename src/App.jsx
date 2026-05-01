import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const showcaseImages = [
  'https://www.shapeinteriors.in/starter/wp-content/uploads/2014/02/slider-1.jpg',
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAzlYk7WP4Z839VvQM6-toUVBM8quUl-GHA&s',
]

function HomePage() {
  return (
    <section className="page home-page">
      <div className="hero">
        <h1>Design interiors that feel like home</h1>
        <p>
          We craft modern, warm, and functional spaces for homes, cafes, and studios.
          Explore our curated design process and premium finishing ideas.
        </p>
        <a className="btn" href="https://wa.me/917973198301" target="_blank" rel="noreferrer">
          Start Your Design Consultation
        </a>
      </div>

      <div className="image-grid">
        {showcaseImages.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} alt="Interior design showcase" />
        ))}
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page about-page">
      <h2>About Our Studio</h2>
      <p>
        We are an interior design team focused on balancing aesthetics with comfort.
        Every project begins with your lifestyle and ends with a personalized, timeless
        look.
      </p>
      <div className="cards">
        <article className="card">
          <h3>Our Mission</h3>
          <p>Create expressive interiors that maximize natural light, utility, and style.</p>
        </article>
        <article className="card">
          <h3>Our Services</h3>
          <p>Space planning, 3D concepts, color styling, furniture selection, and execution.</p>
        </article>
        <article className="card">
          <h3>Why Choose Us</h3>
          <p>Transparent timelines, material clarity, and fully custom design solutions.</p>
        </article>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="page contact-page">
      <h2>Contact Us</h2>
      <p>Let us transform your space. Reach out to schedule a visit.</p>
      <div className="contact-details">
        <p><strong>Phone:</strong> +91 99999 99999</p>
        <p><strong>Email:</strong> hello@interiorstudio.com</p>
        <p><strong>Address:</strong> 24 Design Street, Chandigarh, India</p>
      </div>
      <a
        className="btn secondary"
        href="https://maps.google.com/?q=24+Design+Street+Chandigarh+India"
        target="_blank"
        rel="noreferrer"
      >
        Navigate to Our Location
      </a>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">Interior Studio</div>
        <nav className="site-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="site-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
