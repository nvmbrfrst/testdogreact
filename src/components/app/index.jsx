import { useState, useEffect } from "react";
import { CardList } from "../card-list";
import { Footer } from "../footer";
import { Header } from "../header";
import { Sort } from "../sort";
import { Logo } from "../logo";
import { Search } from "../search";
import { dataCard } from "../../data";
import "./styles.css";

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
        <Sort />
        <CardList goods={cards} />
      </main>
      <Footer />
    </>
  );
}

