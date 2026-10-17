import "./feedback.css";
import chef from "../../img/chefdishes/image.png";
import { useState } from "react";
function Feedback({
  feedback_1,
  feedback_2,
  feedback_3,
  feedback_name1,
  feedback_name2,
  feedback_name3,
  feedback_prof1,
  feedback_prof2,
  feedback_prof3,
  customer1,
  customer2,
  customer3,
}) {
  const [showText, setshowText] = useState(0);
  return (
    <div className="feedback">
      <div className="feedbackleft">
        <div>
          <p className="headingfeedback">
            <span id="black">Customer </span>
            <span id="red">Feedback</span>
          </p>
          <div className="subheadingfeedback">
            {showText === 0 ? (
              <p>{feedback_1}</p>
            ) : showText === 1 ? (
              <p>{feedback_2}</p>
            ) : (
              <p>{feedback_3}</p>
            )}
          </div>
        </div>
        <div className="feedbackcustomer">
          <div className="feedbackcustomername">
            <div className="namecustomer">
              {showText === 0 ? (
                <>
                  <img src={customer1} alt="Customer" className="customerimg" />
                  <p>{feedback_name1}</p>
                </>
              ) : showText === 1 ? (
                <>
                  <img src={customer2} alt="Customer" className="customerimg" />
                  <p>{feedback_name2}</p>
                </>
              ) : (
                <>
                  <img src={customer3} alt="Customer" className="customerimg" />
                  <p>{feedback_name3}</p>
                </>
              )}
            </div>
            <div className="namejob">
              {showText === 0 ? (
                <p>{feedback_prof1}</p>
              ) : showText === 1 ? (
                <p>{feedback_prof2}</p>
              ) : (
                <p>{feedback_prof3}</p>
              )}
            </div>
          </div>
          <div className="position-buttons">
            <button onClick={() => setshowText(0)}>
              <div
                className={showText === 0 ? "btns-chosen" : "btns-not-chosen"}
              ></div>
            </button>
            <button onClick={() => setshowText(1)}>
              <div
                className={showText === 1 ? "btns-chosen" : "btns-not-chosen"}
              ></div>
            </button>
            <button onClick={() => setshowText(2)}>
              <div
                className={showText === 2 ? "btns-chosen" : "btns-not-chosen"}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div className="feedbackright">
        <img src={chef} alt="Chef" className="chefimg" />
      </div>
    </div>
  );
}
export default Feedback;
