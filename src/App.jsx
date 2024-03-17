import { Fragment } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import { Link, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AppStyle from "./app.module.css"

const App = () => {
  const username = `Азим`
  return (
    <Fragment>

      <header className={AppStyle["header"]}>

        <h1 className={AppStyle["title-1"]}>
          {username} - фрилансер, веб-разработчик
        </h1>

        <p className={AppStyle["subtitle"]}>
        Всем привет я профессиональный фрилансер верстальщик. Люблю создание сайтов и веб-разработку.
        </p>

        <nav className={AppStyle["menu"]}> 
          <Link to={"/portfolio"}  className={AppStyle["menu-link"]}>Главное</Link>
          <Link to={"/portfolio/services"} className={AppStyle["menu-link"]}>Услуги</Link>
          <Link to={"/portfolio/projects"}className={AppStyle["menu-link"]}>
            Портфолио
          </Link>

          <Link to={"/portfolio/contacts"} className={AppStyle["menu-link"]}>
            Контакты
          </Link>
        </nav>
      </header>
      

      <main className={AppStyle["main"]}>
        <Routes>
          <Route path="/portfolio" index element={<Home />} />

          <Route path="/portfolio/services" element={<Services />} />

          <Route path="/portfolio/projects" element={<Portfolio />} />

          <Route path="/portfolio/contacts" element={<Contacts />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className={AppStyle["footer"]}>
            &copy; {username}
      </footer>
    </Fragment>
  )
}

export default App;