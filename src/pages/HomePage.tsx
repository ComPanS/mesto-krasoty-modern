import { photos, reviews, services, site } from '../content/site'

export function HomePage() {
  return (
    <div id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <img className="logo" src="/media/logo.png" alt="Логотип Место красоты" />
          <p className="kicker">Салон красоты · Плодородный</p>
          <h1 id="hero-title">Красота, к которой хочется возвращаться</h1>
          <p className="hero-lede">Маникюр, педикюр, стрижки и окрашивание в спокойной атмосфере рядом с домом.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.contact.whatsapp}>Записаться в WhatsApp <span>↗</span></a>
            <a className="text-link" href="#services">Смотреть услуги <span>↓</span></a>
          </div>
          <div className="hero-proof"><strong>5.0</strong><span>97 оценок<br />на Яндекс Картах</span></div>
        </div>
        <div className="hero-image"><img src={photos[0].src} alt={photos[0].alt} /><span className="image-caption">Место, где забота видна в деталях</span></div>
      </section>

      <section className="intro section" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>01</span><span>О салоне</span></div>
        <div className="intro-grid">
          <h2 id="about-title">Сюда приходят за своим мастером</h2>
          <div className="intro-text"><p>В «Месте красоты» можно собрать весь привычный уход в одном визите: от маникюра и педикюра до стрижки и окрашивания волос.</p><p>Чисто, уютно и без спешки. Мастера слышат запрос и помогают выбрать решение, которое действительно подходит.</p></div>
        </div>
        <div className="feature-row"><span>Маникюр</span><span>Педикюр</span><span>Парковка</span><span>Wi-Fi</span><span>Можно с собакой</span></div>
      </section>

      <section className="services section" id="services" aria-labelledby="services-title">
        <div className="section-label"><span>02</span><span>Услуги и цены</span></div>
        <div className="services-head"><h2 id="services-title">Уход, который помещается в ваш день</h2><p>Актуальная стоимость зависит от длины волос и категории мастера. Точную цену подскажут при записи.</p></div>
        <div className="service-list">{services.map((service, index) => <div className="service-item" key={service.title}><span className="service-index">0{index + 1}</span><h3>{service.title}</h3><span className="service-detail">{service.detail}</span><span className="service-arrow">↗</span></div>)}</div>
      </section>

      <section className="reviews section" id="reviews" aria-labelledby="reviews-title">
        <div className="section-label"><span>03</span><span>Отзывы гостей</span></div>
        <div className="reviews-head"><div><span className="rating">5.0</span><span className="stars">★★★★★</span><p>73 отзыва о мастерах, атмосфере и качестве работы</p></div><h2 id="reviews-title">Тёплое отношение<br />чувствуется сразу</h2></div>
        <div className="review-list">{reviews.map((review) => <blockquote key={review.author}><p>“{review.quote}”</p><cite>{review.author}</cite></blockquote>)}</div>
      </section>

      <section className="gallery section" id="photos" aria-labelledby="photos-title">
        <div className="section-label"><span>04</span><span>Атмосфера</span></div>
        <div className="gallery-head"><h2 id="photos-title">Ваше место для красоты</h2><p>Знакомое пространство, любимый мастер, время для себя.</p></div>
        <div className="gallery-grid">{photos.slice(1).map((photo, index) => <img className={`gallery-image gallery-image-${index + 1}`} src={photo.src} alt={photo.alt} key={photo.src} />)}</div>
      </section>

      <section className="contact section" id="contacts" aria-labelledby="contacts-title">
        <div className="contact-panel"><div className="section-label"><span>05</span><span>Контакты</span></div><h2 id="contacts-title">Будем ждать вас</h2><p>{site.contact.address}</p><a className="contact-phone" href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a><div className="contact-actions"><a className="button button-light" href={site.contact.whatsapp}>Написать в WhatsApp ↗</a><a className="contact-route" href={site.contact.directions}>Построить маршрут <span>↗</span></a></div></div><div className="contact-note"><span>Рядом с вами</span><strong>Планерная, 13</strong><p>Плодородный<br />Краснодарский край</p></div></section>
    </div>
  )
}
