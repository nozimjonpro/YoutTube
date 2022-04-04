import React from "react";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";

function Chanel({heading, image}){
    return (
        <div className="nora__chanel">
          <div className="nora__info">
            <img
              className="nora__image"
              src={image}
              alt="user image"
              width={50}
              height={50}
            />
            <div className="nora__username">
              <h3 className="nora__name">{heading}</h3>
              <span className="nora__followers">
                {Math.floor(Math.random() * 1000) + "k" + " " + "subscribed"}
              </span>
            </div>
          </div>
          <div className="nora__notif">
            <NotificationsIcon />
            <button className="nora__btn">Subscribe 2.3m</button>
          </div>
        </div>
    )
}

export default Chanel;