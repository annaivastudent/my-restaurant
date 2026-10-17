import "./info.css";

function Info({ icon, headingitem, subheadingitem }) {
  return (
    <>
      <img src={icon} className="icons" alt="Icon1" />
      <div className="textitems">
        <p className="headingitem">{headingitem}</p>
        <p className="subheadingitem">{subheadingitem}</p>
      </div>
    </>
  );
}
export default Info;
