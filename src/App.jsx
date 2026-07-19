import frontImage from './assets/front-image.png'
import logoImg from './assets/logo.jpeg'
import picImg from './assets/pic.jpeg'
import picsImg from './assets/pics.jpeg'
import './App.css'

const showcaseImages = [
  {
    src: picsImg,
    alt: 'Aum Aura Interior Studio – Designer furniture and curtains in Panchkula',
  },
  {
    src: picImg,
    alt: 'Aum Aura Interior – Style Your Space by Sonam Singh',
  },
  {
    src: 'https://assets.birlaopus.com/is/image/grasimindustries/pic-1-new-elegant-home-office?ts=1742215611125',
    alt: 'Elegant home interior by Aum Aura Interiors',
  },
  {
    src: 'https://www.shapeinteriors.in/starter/wp-content/uploads/2014/02/slider-1.jpg',
    alt: 'Luxury interior design showcase',
  },
]

function App() {
  return (
    <div className="app-shell">
      {/* ── HEADER ── */}
      <header className="site-header">
        <a href="#home" className="brand">
          <img src={logoImg} alt="Aum Aura Interiors Logo" className="brand-logo" />
          <span className="brand-text">Aum Aura Interior</span>
        </a>
        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="site-content">

        {/* ── HERO ── */}
        <section id="home" className="page home-page">
          <div className="fullscreen-hero">
            {/* <img src={frontImage} alt="Aum Aura Interior – Complete Furnishing Studio Panchkula" className="fullscreen-bg" /> */}
            <div className="hero-content-overlay">
              <div className="hero-text-block">
                <p className="hero-tagline">Complete Furnishing Studio in Panchkula</p>
                <h1 className="hero-heading">Style Your Space<br />by <span className="accent">Sonam Singh & Bapreet Singh</span></h1>
                <p className="hero-desc">
                  Customised curtains, upholstery, floral fabrics &amp; designer furniture — made to fit your home.
                  Serving Panchkula · Chandigarh · Mohali · Zirakpur.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="tel:+917696970723">
                    📞 Call: +91 76969-70723
                  </a>
                  <a className="btn ghost" href="#contact">
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="container">
            <div className="hero-stats full-width-stats">
              <div><strong>100+</strong> Projects Designed</div>
              <div><strong>5★</strong> Client Experience</div>
              <div><strong>On-Time</strong> Turnkey Delivery</div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="page about-page">
          <div className="about-inner">
            <div className="about-text">
              <p className="section-label">About Us</p>
              <h2>Aum Aura Interior<br /><span className="accent">by Sonam Singh</span></h2>
              <p className="about-desc">
                Aum Aura Interior by Sonam Singh is a <strong>Complete Furnishing Studio</strong> in Panchkula.
                We specialise in customised curtains, upholstery, floral fabrics, and designer furniture made to fit your home.
              </p>
              <p className="about-desc">
                From concept to installation, we create elegant, functional interiors that reflect your style.
                Visit our studio to explore premium fabrics, curated furniture, and end-to-end furnishing solutions.
              </p>
              <p className="about-desc serving-areas">
                📍 Serving <strong>Panchkula, Chandigarh, Mohali &amp; Zirakpur</strong>
              </p>
              <a className="btn" href="#contact">Book Your Free Consultation Today</a>
            </div>
            <div className="about-image-wrap">
              <img src={picsImg} alt="Aum Aura Interior Studio – Panchkula" className="about-img" />
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="page services-page">
          <p className="section-label">What We Offer</p>
          <h2>Our Furnishing &amp; Interior Services</h2>
          <p className="section-sub">
            End-to-end furnishing solutions crafted with premium materials and personalised attention.
          </p>
          <div className="cards">
            <article className="card">
              <div className="card-icon">🪟</div>
              <h3>Customised Curtains</h3>
              <p>Tailored curtains in floral, linen, sheer &amp; blackout fabrics to match your space perfectly.</p>
            </article>
            <article className="card">
              <div className="card-icon">🛋️</div>
              <h3>Upholstery</h3>
              <p>Premium sofa, chair &amp; furniture upholstery using high-quality, durable fabrics.</p>
            </article>
            <article className="card">
              <div className="card-icon">🌸</div>
              <h3>Floral Fabrics</h3>
              <p>Curated floral and designer fabric collections to elevate every corner of your home.</p>
            </article>
            <article className="card">
              <div className="card-icon">🪑</div>
              <h3>Designer Furniture</h3>
              <p>Bespoke furniture designed and crafted to fit your space, style, and functional needs.</p>
            </article>
            <article className="card">
              <div className="card-icon">🏠</div>
              <h3>Complete Home Interiors</h3>
              <p>From living rooms to bedrooms — full interior execution with elegant finishing.</p>
            </article>
            <article className="card">
              <div className="card-icon">✅</div>
              <h3>End-to-End Installation</h3>
              <p>Concept to installation — we manage everything so you can focus on enjoying your space.</p>
            </article>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section id="gallery" className="page gallery-page">
          <p className="section-label">Our Work</p>
          <h2>Studio &amp; Project Gallery</h2>
          <div className="image-grid">
            {showcaseImages.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="page process-page">
          <p className="section-label">Our Process</p>
          <h2>From Concept to Installation</h2>
          <div className="process-grid">
            <article className="process-step">
              <div className="step-number">1</div>
              <h3>Free Consultation</h3>
              <p>We understand your vision, space, and budget with a no-obligation consultation.</p>
            </article>
            <article className="process-step">
              <div className="step-number">2</div>
              <h3>Design &amp; Selection</h3>
              <p>Fabric swatches, furniture samples, and layout plans presented at our studio.</p>
            </article>
            <article className="process-step">
              <div className="step-number">3</div>
              <h3>Crafting &amp; Tailoring</h3>
              <p>Each piece is custom crafted — curtains stitched, furniture built, upholstery fitted.</p>
            </article>
            <article className="process-step">
              <div className="step-number">4</div>
              <h3>Installation &amp; Handover</h3>
              <p>Professional installation at your home with final styling and quality checks.</p>
            </article>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="page why-page">
          <p className="section-label">Why Choose Us</p>
          <h2>Why Clients Trust Aum Aura Interior</h2>
          <ul className="why-list">
            <li>🎨 Specialised in customised curtains, upholstery &amp; designer furniture.</li>
            <li>📐 Made-to-measure solutions tailored to your exact home dimensions.</li>
            <li>💎 Premium fabric &amp; furniture collections available in our studio showroom.</li>
            <li>🔧 Complete end-to-end service — from design to installation.</li>
            <li>📍 Conveniently serving Panchkula, Chandigarh, Mohali &amp; Zirakpur.</li>
            <li>📞 Personalized attention by Sonam Singh — one point of contact throughout.</li>
          </ul>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="page contact-page">
          <p className="section-label">Get In Touch</p>
          <h2>Book Your Free Consultation</h2>
          <p className="section-sub">
            Visit our studio to explore premium fabrics, curated furniture, and end-to-end furnishing solutions.
          </p>

          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-row">
                  <span className="contact-icon">📞</span>
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href="tel:+917696970723" className="contact-value">+91 76969-70723</a>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <p className="contact-label">Email</p>
                    <a href="mailto:Sonamshai30@gmail.com" className="contact-value">Sonamshai30@gmail.com</a>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="contact-icon">📍</span>
                  <div>
                    <p className="contact-label">Studio Address</p>
                    <p className="contact-value">#832, Sector 8, Panchkula – 134109</p>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="contact-icon">🗺️</span>
                  <div>
                    <p className="contact-label">Areas Served</p>
                    <p className="contact-value">Panchkula · Chandigarh · Mohali · Zirakpur</p>
                  </div>
                </div>
                <div className="contact-actions">
                  <a className="btn" href="tel:+917696970723">Call Now</a>
                  <a
                    className="btn secondary"
                    href="https://maps.google.com/?q=832+Sector+8+Panchkula+134109"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Navigate to Studio
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-img-wrap">
              <img src={picImg} alt="Aum Aura Interior Business Card – Sonam Singh" className="contact-img" />
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <img src={logoImg} alt="Aum Aura Interiors" className="footer-logo" />
        <p>
          <strong>Aum Aura Interior by Sonam Singh</strong><br />
          Complete Furnishing Studio · #832, Sector 8, Panchkula – 134109
        </p>
        <p>📞 +91 76969-70723 &nbsp;|&nbsp; ✉️ Sonamshai30@gmail.com</p>
        <p className="footer-areas">Serving Panchkula · Chandigarh · Mohali · Zirakpur</p>
        <p className="footer-copy">© 2025 Aum Aura Interior. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
