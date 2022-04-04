import React from "react";
import { useParams } from "react-router-dom";
import "./playist.scss";
import Food from "../../Assets/img/food.svg";
function Playist() {
  const { id } = useParams();
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/" + id)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <section className="Playist">
      <div className="container">
        <div className="playist__Inner">
          <div className="playist__left">
            <img
              src={user.url}
              alt=""
              className="playist__image"
              width={1000}
              height={500}
            />
            <h2 className="playist__heading">{user.title}</h2>
            <span className="gussie__views">
              {Math.floor(Math.random() * 1000) + "k" + " " + "views"}
            </span>

            <div className="playist__bottom">
              <div className="playist__bottom-heading">
                <div className="playist__headingjon">
                  <img src={Food} alt="bnnma" width={80} height={80} />
                  <div>
                    <h3 className="playist__title">Food & Drink</h3>
                    <span className="gussie__views gussie__views-active">
                      Published on 10 Juny 2021 Year
                    </span>
                    <p className="playist__text">
                      A successful marketing plan relies heavily on the
                      pulling-power of advertising copy. Writing result-oriented
                      ad copy is difficult, as it must appeal to, entice, and
                      convince consumers to take action. There is no magic
                      formula to write perfect ad copy; it is based on a number
                      of factors, including ad placement, demographic, even the
                      consumer’s mood when they see your ad.
                    </p>
                  </div>
                </div>
              </div>
              <button className="playist__btn">Subscribe 2.3m</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Playist;
