import React, { Fragment } from 'react'
import ServicesStyle from "./Pages.module.css";

const Services = () => {
  const services = [
    ` Верстка по макетам из Photoshop или Figma`,
    ` Мобильная, адаптивная верстка под смартфоны и планшеты`,
    ` SEO оптимизированная верстка для продвижения в поисковых системах`,
    ` Различные JavaScript и jQuery скрипты для интерактива на сайте.`,
    `Retina оптимизированная верстка, так что ваш сайт будет не стыдно открыть на технике Apple или 4K дисплее.`,

  ]
  const skills = [
    `HTML5, CSS3, Flexbox, SCSS, JS, jQuery, Gulp`,
    `Аккуратный, логичный, продуманный код`,
    `Соблюдение стандартов W3C и правил BEM naming`,
    `SEO-верстка — помогает продвижению сайта в Яндекс и Google`,
    `Адаптация / внедрение плагинов.`,
    `Использование спрайтов — позволяет ускорить загрузку страницы`,
    `Pixel perfect — идеальное совпадение с дизайн макетом`,
    ` Retina Ready — на retina и 4К экранах графика будет смотреться четко и не размыто`
  ];

  const service = services.map((item, index) => {
    return (
      <Fragment key={index}>
        <li>{item}</li>
      </Fragment>
    )
  })


  const skill = skills.map((item, index) => {
    return (
      <Fragment key={index}>
        <li>{item}</li>
      </Fragment>
    )
  })
  return (
    <div>
      <section className={ServicesStyle['services']}>
        <h2 className={ServicesStyle['title-2']}>
          Мои услуги по верстке сайтов
        </h2>
        <ul>
          {service}
        </ul>
        <p>
          Верстаю сайты переводя макеты из Figma или Photoshop в чистый, валидный и семантический HTML код. Это значит что он будет работать без ошибок, хорошо индексироваться поисковыми роботами и поможет вашему сайту занять хорошие позиции в поиске.
        </p>
        <h3 className={ServicesStyle['title-3']}>
          Мои навыки в верстке сайтов:
        </h3>

        <ul>
          {skill}
        </ul>
        <p>
          Оптимизирую скорость загрузки страницы - благодаря обработке графики. Сайт будет быстро загружаться - это порадует ваших пользователей и поможет вам получить более высокие позиции в поиске.
        </p>
        <p>
          Моя верстка легко интегрируется в любую систему управления контентом: WordPress, Bitrix, ModX, Joomla, OpenCart, ShopScript и другие.

        </p>
      </section>
    </div>
  )
}

export default Services