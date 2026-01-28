import { useState, useEffect } from "react";

//Input -- > output
//Window API ---> "omline" || "offline"

export const status = () => {
  const [onlineStatus, setOnlineStatus] = useState(true); //user_state

  useEffect(() => {
    //ISACTIVE
    window.addEventListener("online", () => {
      setOnlineStatus(true)  
    });

    //INACTIVE
    window.addEventListener("offline", () => {
      setOnlineStatus(false)
    });
    

  }, []);
  
  return onlineStatus;
};

