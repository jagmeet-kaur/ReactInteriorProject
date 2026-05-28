import frontImage from './assets/front-image.png'
import './App.css'

const showcaseImages = [
  frontImage,
  'https://assets.birlaopus.com/is/image/grasimindustries/pic-1-new-elegant-home-office?ts=1742215611125',
  'https://www.shapeinteriors.in/starter/wp-content/uploads/2014/02/slider-1.jpg',
]

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a href="#home" className="brand">Aum Aura Interiors</a>
        <nav className="site-nav">
          <a href="#home">Aum Aura Interiors</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="site-content">
        <section id="home" className="page home-page">
          <div className="fullscreen-hero">
            <img src={frontImage} alt="Aum Aura Interiors Full Screen" className="fullscreen-bg" />

            <div className="hero-content-overlay">
              <div className="hero-actions">
                <a className="btn" href="tel:+917973198301">
                  Call Now: 7973198301
                </a>
                <a className="btn ghost" href="#contact">
                  Book Site Visit in
                </a>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="hero-stats full-width-stats">
              <div><strong>100+</strong> Projects Designed</div>
              <div><strong>5★</strong> Client Experience</div>
              <div><strong>On-Time</strong> Turnkey Delivery</div>
            </div>

            <div className="image-grid">
              {showcaseImages.slice(1).map((imageUrl) => (
                <img key={imageUrl} src={imageUrl} alt="Aum Aura Interiors design showcase" />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="page about-page">
          <h2>About Aum Aura Interiors</h2>
          <p>
            At Aum Aura Interiors, we combine creative direction with practical planning to
            deliver beautifully balanced spaces. Our team focuses on quality materials,
            thoughtful layouts, and timeless aesthetics.
          </p>
          <div className="cards">
            <article className="card">
              <h3>Design Expertise</h3>
              <p>Modular kitchens, bedrooms, living spaces, and complete turnkey interiors.</p>
            </article>
            <article className="card">
              <h3>Personalized Process</h3>
              <p>Every project starts with a detailed consultation and lifestyle analysis.</p>
            </article>
            <article className="card">
              <h3>Execution Focus</h3>
              <p>We deliver on-time project coordination with premium finishing standards.</p>
            </article>
          </div>
        </section>

        <section className="page services-page">
          <h2>Our Interior Services</h2>
          <p>
            We offer complete interior solutions for homes, offices, and commercial spaces
            with end-to-end execution support.
          </p>
          <div className="cards">
            <article className="card">
              <h3>Living Room Design</h3>
              <p>Smart layouts, premium finishes, TV units, false ceilings, and lighting.</p>
            </article>
            <article className="card">
              <h3>Modular Kitchen</h3>
              <p>Functional modular kitchens with modern storage and sleek design themes.</p>
            </article>
            <article className="card">
              <h3>Bedroom Interiors</h3>
              <p>Wardrobes, headboards, soft lighting, and cozy styling for daily comfort.</p>
            </article>
          </div>
        </section>

        <section className="page process-page">
          <h2>How We Work</h2>
          <div className="process-grid">
            <article className="process-step">
              <h3>1. Consultation</h3>
              <p>We understand your requirements, space, and budget in detail.</p>
            </article>
            <article className="process-step">
              <h3>2. Concept and Design</h3>
              <p>We share concepts, layout plans, and material suggestions.</p>
            </article>
            <article className="process-step">
              <h3>3. Execution</h3>
              <p>Our team executes everything with quality checks and timeline tracking.</p>
            </article>
            <article className="process-step">
              <h3>4. Handover</h3>
              <p>Final styling, finishing touchups, and ready-to-use space handover.</p>
            </article>
          </div>
        </section>

        <section className="page why-page">
          <h2>Why Clients Choose Us</h2>
          <ul className="why-list">
            <li>Transparent quotation and practical design recommendations.</li>
            <li>Attention to detail in finish quality and space utility.</li>
            <li>Single-point coordination from design to final execution.</li>
            <li>Strong after-service support and customer-first approach.</li>
          </ul>
        </section>

        <section id="contact" className="page contact-page">
          <h2>Contact and Location</h2>
          <p>Book a site visit or consultation for your home or office interior project.</p>
          <div className="contact-details">
            <p><strong>Phone:</strong> 7973198301</p>
            <p><strong>Location:</strong> Panchkula Sector 8</p>
          </div>
          <a
            className="btn secondary"
            href="https://maps.google.com/?q=Panchkula+Sector+8"
            target="_blank"
            rel="noreferrer"
          >
            Navigate to Panchkula Sector 8
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <p>Aum Aura Interiors - Panchkula Sector 8 - 7973198301</p>
      </footer>
    </div>
  )
}

export default App
