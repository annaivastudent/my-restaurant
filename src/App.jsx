import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Items from "./components/items/Items";
import Info from "./components/information/Info";
import Dishes from "./components/dishes/Dishes";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import item1 from "../src/img/items/01.png";
import item2 from "../src/img/items/02.png";
import item3 from "../src/img/items/03.png";
import item4 from "../src/img/items/04.png";
import dish1 from "../src/img/dishes/dish1.png";
import dish2 from "../src/img/dishes/dish2.png";
import dish3 from "../src/img/dishes/dish3.png";
import dish4 from "../src/img/dishes/dish4.png";
import dish5 from "../src/img/dishes/dish5.png";
import dish6 from "../src/img/dishes/dish6.png";
import rate from "../src/img/dishes/rate.png";
import maindish from "../src/img/maindish/left.png";
import icon1 from "../src/img/icons/icon1.png";
import icon2 from "../src/img/icons/icon2.png";
import icon3 from "../src/img/icons/icon3.png";
import customer1 from "../src/img/customers/customer.png";
import customer2 from "../src/img/customers/customer_2.png";
import customer3 from "../src/img/customers/customer_3.png";
function App() {
  return (
    <>
      <div className="landing-position">
        <Header />
        <Banner />
        <div className="items">
          <div className="firstitem">
            <Items
              items={item1}
              title="Quality Food"
              subtitle="We use fresh ingredients to prepare delicious and healthy meals every day."
              btnmore="Learn More"
            />
          </div>
          <div className="seconditem">
            <Items
              items={item2}
              title="Fast Delivery"
              subtitle="Enjoy fast delivery of your favorite meals right to your doorstep."
              btnmore="Learn More"
            />
          </div>
          <div className="thirditem">
            <Items
              items={item3}
              title="Save Money"
              subtitle="Enjoy delicious meals at affordable prices on every order."
              btnmore="Learn More"
            />
          </div>
          <div className="fourthitem">
            <Items
              items={item4}
              title="Easy Ordering"
              subtitle="Order your favorite meals in just a few clicks without any hassle."
              btnmore="Learn More"
            />
          </div>
        </div>
        <div className="infoblock">
          <div>
            <img src={maindish} className="maindishimg" alt="Main picture" />
          </div>
          <div className="inforightblock">
            <p className="props">Why People Choose us?</p>
            <div>
              <div className="propsitem1">
                <Info
                  icon={icon1}
                  headingitem="Convenient and Reliable"
                  subheadingitem="Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free."
                />
              </div>
              <div className="propsitem2">
                <Info
                  icon={icon2}
                  headingitem="Variety of Options"
                  subheadingitem="From hearty meals to light snacks, we offer a wide range of
                options to suit every taste and craving."
                />
              </div>
              <div className="propsitem3">
                <Info
                  icon={icon3}
                  headingitem="Eat Burger"
                  subheadingitem="Our burgers are grilled to perfection, with juicy patties and
                flavorful toppings that make every bite a delicious experience."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="headingdishes">
          <p className="headingtext">Our best Seller Dishes🔥🔥</p>
          <p className="subheadingtext">
            Our fresh garden salad is a light and refreshing option. It features
            a mix of crisp lettuce, juicy tomatoe all tossed in your choice of
            dressing.
          </p>
        </div>
        <div className="dishblock" id="dishblock1">
          <div className="dishcard">
            <Dishes
              dish={dish1}
              title="Breakfast Food"
              btntitle="Buy Now"
              price="$230"
              rate={rate}
            />
          </div>
          <div className="dishcard">
            <Dishes
              dish={dish2}
              title="Dinner Food"
              btntitle="Buy Now"
              price="$120"
              rate={rate}
            />
          </div>
          <div className="dishcard">
            <Dishes
              dish={dish3}
              title="Lunch Food"
              btntitle="Buy Now"
              price="$320"
              rate={rate}
            />
          </div>
        </div>
        <div className="dishblock" id="dishblock2">
          <div className="dishcard">
            <Dishes
              dish={dish4}
              title="Breakfast Food"
              btntitle="Buy Now"
              price="$20"
              rate={rate}
            />
          </div>
          <div className="dishcard">
            <Dishes
              dish={dish5}
              title="Vegetables Food"
              btntitle="Buy Now"
              price="$10"
              rate={rate}
            />
          </div>
          <div className="dishcard">
            <Dishes
              dish={dish6}
              title="Breakfast Food"
              btntitle="Buy Now"
              price="$50"
              rate={rate}
            />
          </div>
        </div>
        <Feedback
          feedback_1="I had a wonderful experience at this restaurant. The food was
                fresh, flavorful, and beautifully presented. Every dish was
                prepared with care, and the atmosphere was warm and inviting.
                The staff was attentive, friendly, and made sure everything was
                perfect."
          feedback_2="I really enjoyed dining at this restaurant. The meals were delicious, the ingredients tasted fresh, and the portions were generous. Everything was served on time, and the staff was helpful and welcoming. I would definitely recommend this place to anyone who loves great food."
          feedback_3="I really enjoyed my visit to this restaurant. The food was delicious, fresh, and beautifully served. Every meal was full of flavor, and the cozy atmosphere made me feel comfortable. The staff was kind and helpful, making the whole experience even better."
          feedback_name1="Tayyab Sohail"
          feedback_name2="Ahmed Khan"
          feedback_name3="Daniel Carter"
          feedback_prof1="UX/UI Designer"
          feedback_prof2="Product Designer"
          feedback_prof3="Frontend Developer"
          customer1={customer1}
          customer2={customer2}
          customer3={customer3}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
