import React, { Fragment } from 'react'
import ContactStyle from "./Pages.module.css";

const Contacts = () => {
  const contacts = [
    {
      id: 1,
      title: "telegramm",
      link: `https://t.me/sjjsjsjr`
    },

    {
      id: 2,
      title: "GitHub",
      link: "https://github.com/Azim90990"
    },
  ];

  const link = contacts.map((iitem, index) => {
    return (
      <Fragment key={index}>
        <li>  <a href={iitem.link} target='_blank'>{iitem.title}</a></li>
      </Fragment>
    )
  });

  return (
    <div>
      <section className={ContactStyle['contacts']}>
        <h2 className={ContactStyle['title-2']}>Контакты</h2>
        <p>
          Напишите мне на почту info@developer.com и мы оперативно обсудим ваш проект.
        </p>
        <ul>
          {link}
        </ul>

      </section>
    </div>
  )
}

export default Contacts