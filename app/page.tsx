import Link from 'next/link';

const stats = [
  ['9,000+', 'Lives benefited'],
  ['2019', 'Serving since'],
  ['24/7', 'Emergency support'],
  ['100%', 'Verified screening'],
];

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <Link className="brand" href="/"><span className="brandMark">+</span> Next-Gen Blood Bank</Link>
        <div className="navLinks">
          <Link href="#services">Services</Link>
          <Link href="#blood-stock">Blood stock</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link className="navCta" href="/request">Request blood</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <span className="eyebrow">Saving lives since 2019</span>
          <h1>Every donation is a<br /><em>second chance.</em></h1>
          <p>Connect donors, hospitals, laboratories and blood bank staff through one secure, intelligent platform.</p>
          <div className="heroActions">
            <Link className="primaryButton" href="/donate">Donate blood</Link>
            <Link className="secondaryButton" href="/request">Request blood</Link>
          </div>
        </div>
        <div className="heroVisual" aria-label="Blood donation illustration">
          <div className="drop"><span>save<br />a life</span></div>
          <div className="pulse p1" />
          <div className="pulse p2" />
        </div>
      </section>

      <section className="stats">
        {stats.map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section id="services" className="section">
        <div className="sectionHeading">
          <span>Our network</span>
          <h2>Complete blood bank operations</h2>
        </div>
        <div className="serviceGrid">
          <article><b>01</b><h3>Donor management</h3><p>Register donors, assess eligibility, schedule appointments and send safe reminders.</p></article>
          <article><b>02</b><h3>Smart inventory</h3><p>Track units by blood group, component, batch and expiry with real-time alerts.</p></article>
          <article><b>03</b><h3>Request matching</h3><p>Match emergency requests against compatible, available and screened units.</p></article>
          <article><b>04</b><h3>Camp operations</h3><p>Plan donation drives, manage venues and monitor camp collection targets.</p></article>
        </div>
      </section>

      <section id="blood-stock" className="section stockSection">
        <div className="sectionHeading">
          <span>Live availability</span>
          <h2>Explore blood groups</h2>
        </div>
        <div className="bloodGrid">
          {bloodTypes.map((type) => (
            <Link className="bloodCard" href={`/request?group=${encodeURIComponent(type)}`} key={type}>
              <strong>{type}</strong><span>Check availability</span>
            </Link>
          ))}
        </div>
      </section>

      <footer>
        <div><strong>Next-Gen Blood Bank</strong><p>Serving communities since 2019.</p></div>
        <div><span>Emergency:</span> <strong>+91 00000 00000</strong></div>
      </footer>
    </main>
  );
}
