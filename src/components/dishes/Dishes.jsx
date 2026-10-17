import "./dishes.css";
function Dishes({ dish, title, btntitle, rate, price }) {
  return (
    <>
      <img src={dish} className="dishimg" alt="Dish1" />
      <div className="dishtitlebtn">
        <p className="dishheading">{title}</p>
        <button className="btnbuy">
          <p className="btnbuytext">{btntitle}</p>
        </button>
      </div>
      <div className="linerate">
        <div className="rate">
          <img src={rate} alt="Star" />
        </div>
        <div>
          <p className="price">{price}</p>
        </div>
      </div>
    </>
  );
}
export default Dishes;
