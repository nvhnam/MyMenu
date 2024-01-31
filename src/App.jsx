/* eslint-disable react/prop-types */
import data from "../data/data.js";

const isEmpty = data.length > 0;

function Header() {
  return <header className="header">OUR MENU</header>;
}

function Menu() {
  return (
    <>
      {isEmpty ? (
        <main className="menu">
          {data.map((card) => (
            <Card cardObj={card} key={card.id} />
          ))}
        </main>
      ) : (
        <main className="menuEmpty">
          We are updating our menu. Please visit again
        </main>
      )}
    </>
  );
}

function Card({ cardObj }) {
  return (
    <div className="card">
      <img className="cardImg" src={cardObj.image} alt={cardObj.alt} />
      <h1 className="cardName">{cardObj.title}</h1>
      <p className="cardDescr">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
        perferendis.
      </p>
      <span className="cardPrice">{cardObj.price}</span>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  // const hour = 7;
  const openHour = 8;
  const closeHour = 22;
  const result = hour >= openHour && hour <= closeHour;

  return (
    <div className="footerContainer">
      {isEmpty && (
        <div className="order">
          {result ? (
            <>
              <h1 className="orderText">
                Now open until {closeHour}:00. Come visit us!
              </h1>
              <button className="orderButton">Order Now</button>
            </>
          ) : (
            <h1 className="orderText">
              We are closed. See you again from {openHour}:00 to {closeHour}:00
              tomorrow
            </h1>
          )}
        </div>
      )}
      <footer className="footer">The Coffee Website {year}</footer>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
