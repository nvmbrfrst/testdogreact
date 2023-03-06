import { dataCard } from "../../data";
import { Card } from "../card";
import "./styles.css";

export function CardList() {
  return (
    <div className="cards content__cards">

      {/* {dataCard.map(function (dataItem))
            return <Card name={dataItem.name} price = {dataItem.price} />;
      } */}

      {/* {dataCard.map(function (dataItem, index) {
        return <Card key={index} {...dataItem} />;
      })} */}

      {dataCard.map((dataItem, index) => (
        <Card key={index} {...dataItem} />
      ))}

    </div>
  );
}
