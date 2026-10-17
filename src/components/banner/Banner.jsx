import "./banner.css";
import right from "../../img/grades/right.png";
function Banner() {
  return (
    <div className="banner">
      <div className="bannerleft">
        <div className="stickertext">
          <p className="heading">Desire</p>
          <p className="sticker">Food</p>
        </div>
        <p className="subheading">for Your Taste</p>
        <p className="maininfo">
          Food is what we eat to stay alive and healthy. It comes in many
          different forms and flavors, from fruits and vegetables to meats and
          grains.
        </p>
        <button className="bannerbtn">
          <p>Order Now</p>
        </button>
      </div>
      <div className="bannerright">
        <img src={right} alt="Grades" />
      </div>
    </div>
  );
}
export default Banner;
