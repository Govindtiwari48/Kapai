import { publicImg } from '../paths'
import { MenuSection } from './MenuSection'
import { OptimizedImage } from './OptimizedImage'

export function MainSections() {
  return (
    <>
      <section id="about">
        <div className="about-inner">
          <div className="about-image-side reveal-left">
            <OptimizedImage
              src={publicImg('crowd in kapi.jpg')}
              alt="Kapai crowd and community"
            />
            <div className="about-image-overlay" aria-hidden />
            <div className="about-badge">
              <p>Premium</p>
              <span>Specialty Coffee</span>
            </div>
          </div>
          <div className="about-text-side reveal-right">
            <span className="section-eyebrow">Our Philosophy</span>
            <h2 className="section-title">
              More Than Coffee.
              <br />
              It&apos;s a <em>Way of Life.</em>
            </h2>
            <div className="gold-rule" />
            <p className="section-desc">
              Kapai is a community-driven Speciality Coffee House and Bistro with a
              soothing ambience built for your daily Coffee run. We intend on serving
              you the finest coffee paired with a vibrant variety of fooding options —
              including all-day breakfast and much more.
            </p>
            <blockquote className="about-quote">
              &ldquo;We Intend on serving you the best kind of Coffee with a Variety of
              Fooding options including all day breakfast and much more.&rdquo;
            </blockquote>
            <p className="about-hashtag">#Antisarkapai</p>
            <div className="about-features">
              <div className="about-feature">
                <span className="about-feature-num">100%</span>
                <span className="about-feature-label">Specialty Grade</span>
              </div>
              <div className="about-feature">
                <span className="about-feature-num">All Day</span>
                <span className="about-feature-label">Breakfast Menu</span>
              </div>
              <div className="about-feature">
                <span className="about-feature-num">1 Place</span>
                <span className="about-feature-label">Infinite Vibes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brews">
        <div className="brews-header reveal">
          <span className="section-eyebrow">From Our Bar</span>
          <h2 className="section-title">
            Crafted With <em>Intention</em>
          </h2>
          <div className="gold-rule" style={{ margin: '24px auto' }} />
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
            Every cup tells a story. Our baristas pour knowledge, passion and precision
            into every single brew — from the first espresso pull to the final latte art
            stroke.
          </p>
        </div>
        <div className="brews-grid">
          {[
            ['expresso boom coffee.jpg', 'Espresso Boom', 'Espresso', 'Espresso Boom'],
            ['Mango-Coffe kapai.jpg', 'Mango Cold Brew', 'Signature', 'Mango Coffee'],
            ['peech coffee new.jpg', 'Peach Brew', 'Seasonal', 'Peach Coffee'],
            ['cupid matcha .jpg', 'Cupid Matcha', 'Matcha', 'Cupid Matcha'],
          ].map(([file, title, tag, alt], i) => (
            <div
              className="brew-card reveal"
              key={file}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <OptimizedImage src={publicImg(file)} alt={alt} />
              <div className="brew-card-overlay">
                <span className="brew-tag">{tag}</span>
                <h3 className="brew-name">{title}</h3>
                <p className="brew-desc">
                  {i === 0 &&
                    'A bold, concentrated shot of perfection — rich crema, dark chocolate notes with a lingering smoky finish.'}
                  {i === 1 &&
                    'Our tropical twist on cold brew — silky mango infused with slow-steeped single-origin coffee over ice.'}
                  {i === 2 &&
                    'Blush-toned, fruity and refreshing — delicate peach meets specialty espresso in this crowd favourite.'}
                  {i === 3 &&
                    'Ceremonial grade matcha layered with steamed oat milk — vibrant, earthy and utterly beautiful.'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="brews-grid"
          style={{ marginTop: 3, gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {[
            ['sweet red coffe with flower.jpg', 'Bloom & Brew', 'Special'],
            ['nrml Coffee mood theme.jpg', 'The Kapai Classic', 'Classic'],
            ['coffee with spoon.jpg', 'The Slow Pour', 'Pour Over'],
          ].map(([file, title, tag], i) => (
            <div
              className="brew-card reveal"
              key={file}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <OptimizedImage src={publicImg(file)} alt={title} />
              <div className="brew-card-overlay">
                <span className="brew-tag">{tag}</span>
                <h3 className="brew-name">{title}</h3>
                <p className="brew-desc">
                  {i === 0 &&
                    'A stunning rose-infused pour — visually breathtaking and delicately floral on the palate.'}
                  {i === 1 &&
                    'Clean, balanced and deeply satisfying — our house espresso blend pulled to pure perfection.'}
                  {i === 2 &&
                    'Take your time. Single origin beans, hand-poured with patience — every cup a meditation.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cinematic-break">
        <OptimizedImage
          src={publicImg('brew machine look cat 0.jpg')}
          alt="Brew machine"
        />
        <div className="cinematic-break-overlay" aria-hidden />
        <div className="cinematic-text reveal">
          <h2>
            The Art of the <em>Perfect Brew</em>
          </h2>
          <p>Precision · Passion · Provenance</p>
        </div>
      </div>

      <MenuSection />

      <section id="vibe">
        <div className="vibe-header">
          <span className="section-eyebrow reveal">Our World</span>
          <h2 className="section-title reveal">
            The <em>Kapai</em> Vibe
          </h2>
          <div className="gold-rule reveal" style={{ margin: '24px auto' }} />
        </div>
        <div className="vibe-grid">
          {[
            [
              'vibe-cell-1',
              'crowd in kapi.jpg',
              'Kapai crowd and community',
              'Where community gathers',
            ],
            [
              'vibe-cell-2',
              'english platter cat 1.jpg',
              'English breakfast platter at Kapai',
              'Long tables, slow mornings',
            ],
            [
              'vibe-cell-3',
              'pancake bowl -cat 1.jpg',
              'Pancake bowl at Kapai',
              'Stacks worth stopping for',
            ],
            [
              'vibe-cell-4',
              'oat meal cat 1.jpg',
              'Signature oat bowl at Kapai',
              'Wholesome starts, every day',
            ],
            [
              'vibe-cell-5',
              'smash avo egg cat 1.jpg',
              'Smashed avo and egg at Kapai',
              'Brunch favourites, done right',
            ],
            [
              'vibe-cell-6',
              'sweet pancake good.jpg',
              'Mini pancake stack at Kapai',
              'Sweet moments on every plate',
            ],
          ].map(([cls, file, alt, cap]) => (
            <div className={`vibe-cell ${cls}`} key={cls}>
              <OptimizedImage src={publicImg(file)} alt={alt} />
              <div className="vibe-overlay-card">
                <p>{cap}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="vibe-tagline">
          <h2 className="reveal">
            Come for the <em>Coffee.</em>
            <br />
            Stay for the <em>Vibe.</em>
          </h2>
        </div>
      </section>

      <section id="space">
        <div className="space-inner">
          <div className="space-image reveal-left">
            <OptimizedImage
              src={publicImg('kapai outer small look.jpg')}
              alt="Kapai exterior"
            />
          </div>
          <div className="space-text reveal-right">
            <span className="section-eyebrow">Find Your Corner</span>
            <h2 className="section-title">
              A Space
              <br />
              Built for <em>Belonging</em>
            </h2>
            <div className="gold-rule" />
            <p className="section-desc">
              Nestled in the heart of Model Town, Kanpur — Kapai is more than a café.
              It&apos;s your third place. Whether you&apos;re catching up with a friend,
              plugging in to work, or simply stealing a quiet moment with a great cup,
              this space was made for you.
            </p>
            <div className="space-features">
              <div className="space-feat">
                <div className="space-feat-icon">☕</div>
                <div className="space-feat-title">Specialty Coffee Bar</div>
                <div className="space-feat-desc">
                  Precision-pulled espresso shots and specialty brews from curated
                  single-origin beans.
                </div>
              </div>
              <div className="space-feat">
                <div className="space-feat-icon">🍳</div>
                <div className="space-feat-title">All Day Kitchen</div>
                <div className="space-feat-desc">
                  Our kitchen never stops — breakfast, lunch, snacks and everything in
                  between, all day long.
                </div>
              </div>
              <div className="space-feat">
                <div className="space-feat-icon">🎶</div>
                <div className="space-feat-title">Curated Ambience</div>
                <div className="space-feat-desc">
                  Soothing music, warm lighting and an atmosphere that feels like home from
                  the first visit.
                </div>
              </div>
              <div className="space-feat">
                <div className="space-feat-icon">🤝</div>
                <div className="space-feat-title">Community First</div>
                <div className="space-feat-desc">
                  A space where strangers become regulars and regulars become family. This
                  is the Kapai way.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="founder">
        <div className="founder-inner">
          <div className="founder-img-wrap reveal-left">
            <OptimizedImage
              src={publicImg('founder added kapai.jpg')}
              alt="Kapai Founder"
            />
          </div>
          <div className="founder-content reveal-right">
            <span className="section-eyebrow">A Message From Us</span>
            <h2 className="section-title">
              The <em>Heart</em> Behind
              <br />
              Every Cup
            </h2>
            <div className="gold-rule" />
            <p className="section-desc">
              Kapai wasn&apos;t built to be just another café. It was built to be a
              feeling — a community — a promise.
            </p>
            <blockquote className="founder-note">
              &ldquo;Kapai is a community driven Speciality Coffee house and Bistro with a
              soothing ambience for your Coffee run. We intend on serving you the best
              kind of Coffee with a Variety of Fooding options including all day
              breakfast and much more.&rdquo;
            </blockquote>
            <p className="founder-name">— The Kapai Family</p>
            <p className="founder-role">Founders · Coffee House &amp; Bistro · Kanpur</p>
          </div>
        </div>
      </section>

      <section id="order">
        <div className="order-inner">
          <span className="section-eyebrow reveal" style={{ display: 'block' }}>
            Get Kapai Delivered
          </span>
          <h2 className="section-title reveal">
            Order Your <em>Favourite</em>
            <br />
            From Wherever You Are
          </h2>
          <div className="gold-rule reveal" style={{ margin: '24px auto' }} />
          <p
            className="section-desc reveal"
            style={{ margin: '0 auto', textAlign: 'center' }}
          >
            Craving that signature Mango Cold Brew or a warm brownie? We bring the Kapai
            experience right to your doorstep. Order fresh, straight from our kitchen.
          </p>
          <div className="order-platforms">
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-btn reveal"
            >
              <span className="btn-icon">🛵</span>
              <span className="btn-text">
                <span className="btn-label">Order via</span>
                <span className="btn-name">Swiggy</span>
              </span>
            </a>
            <a
              href="https://www.eazydiner.com"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-btn reveal"
              style={{ transitionDelay: '0.15s' }}
            >
              <span className="btn-icon">🍽️</span>
              <span className="btn-text">
                <span className="btn-label">Reserve via</span>
                <span className="btn-name">EazyDiner</span>
              </span>
            </a>
            <a href="tel:+919839270027" className="platform-btn reveal" style={{ transitionDelay: '0.3s' }}>
              <span className="btn-icon">📞</span>
              <span className="btn-text">
                <span className="btn-label">Call to Order</span>
                <span className="btn-name">+91 98392 70027</span>
              </span>
            </a>
          </div>
          <div className="order-reserve reveal">
            <p>
              Dine-in reservations available on{' '}
              <a href="https://www.eazydiner.com" target="_blank" rel="noopener noreferrer">
                EazyDiner
              </a>{' '}
              · Delivery via{' '}
              <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">
                Swiggy
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">KAPAI</div>
            <div className="footer-tagline">Coffee House & Bistro</div>
            <p className="footer-desc">
              A community-driven Speciality Coffee house and Bistro with a soothing
              ambience built for your daily coffee run — and so much more.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#brews">Our Brews</a>
              </li>
              <li>
                <a href="#menu">Full Menu</a>
              </li>
              <li>
                <a href="#vibe">The Vibe</a>
              </li>
              <li>
                <a href="#founder">Our Story</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Order & Reserve</h4>
            <ul>
              <li>
                <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">
                  Order on Swiggy
                </a>
              </li>
              <li>
                <a
                  href="https://www.eazydiner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve on EazyDiner
                </a>
              </li>
              <li>
                <a href="tel:+919839270027">Call Us Directly</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Find Us</h4>
            <div className="footer-address">
              <div className="addr-item">
                <span className="addr-icon">📍</span>
                <div className="addr-text">
                  117/H-1/62A, near Candy Floss School,
                  <br />
                  Model Town, Pandu Nagar,
                  <br />
                  Kanpur, Uttar Pradesh 208005
                </div>
              </div>
              <div className="addr-item">
                <span className="addr-icon">📞</span>
                <div className="addr-text">
                  <a href="tel:+919839270027">+91 98392 70027</a>
                </div>
              </div>
              <div className="addr-item">
                <span className="addr-icon">🏛️</span>
                <div className="addr-text">
                  Located in The Gyan&apos;s Avenue
                  <br />
                  <span style={{ fontSize: '0.75rem', color: 'var(--brown-muted)' }}>
                    ~22 mins from city centre
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Kapai Coffee House & Bistro. All rights reserved.
            · Kanpur, UP
          </p>
          <span className="footer-hash">#Antisarkapai</span>
        </div>
      </footer>
    </>
  )
}
