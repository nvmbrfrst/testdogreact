import { useState, useEffect } from "react";
import { CardList } from "../card-list";
import { Footer } from "../footer";
import { Header } from "../header";
import { Sort } from "../sort";
import { Logo } from "../logo";
import { Search } from "../search";
import { dataCard } from "../../data";
// import s from "./styles.module.css";
// import { Button } from "../button";

export function App() {
  // состояние карточек
  const [cards, setCards] = useState(dataCard);
  // состояние поиска
  const [searchQuery, setSearchQuery] = useState("");


  // фильтрация на основе searchQuery массива карточек. поиск. 
  function handleRequest() {
    const filterCards = dataCard.filter((item) =>
      item.name.includes(searchQuery)
    );
    // отфильтрованнные - в новое состояние - cards
    setCards(filterCards);
  }

  // search/index.js
  function handleFormSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  // parent (app/index) -> child (search/index)
  // установка данных поиска в hooks/state
  function handleInputChange(dataInput) {
    setSearchQuery(dataInput);
  }

  useEffect(() => {
    handleRequest();
    // отслеживание постоянного ввода
    // eslint-disable-next-line
  }, [searchQuery]);


  // in-line styles
  // const margin = 40;
  // const headerStyle = {
  //   color: "red",
  //   margin: `${margin}px`,
  // }

  return (
    <>
      <Header>
        <Logo />
        <Search
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      </Header>
      <main className="content container">
      {/* <h1 style={headerStyle}>Стилизованный заголовок</h1>
        <Button htmlType='button' type="primary" extraClass={s.button}>Купить</Button>
        <Button htmlType='button' type="secondary">Отложить</Button> */}
        <Sort />
        <CardList goods={cards} />
      </main>
      <Footer />
    </>
  );
}

