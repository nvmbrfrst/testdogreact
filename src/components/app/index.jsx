import { Sort } from '../sort';
import { Footer } from '../footer';
import { Header } from '../header';
import { CardList } from '../card-list';
import './styles.css';

export function App() {
  return (
    <>
      <Header />

      <main className="content container">
      <Sort />
      <CardList />
      </main>

      <Footer />

    </>
  );
}

