import "./items.css";
function Items({ items, title, subtitle, btnmore }) {
  return (
    <>
      <img src={items} className="itemimg" alt="Grade" />
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      <p className="btnmore">{btnmore}</p>
    </>
  );
}
export default Items;
