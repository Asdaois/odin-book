import React, { useState, useEffect } from "react";
import { userApi } from "../../api/usersApi.js";
import { useSelector } from "react-redux";
import NotifitationsButton from "../notifications_button";

export const Notifications = () => {
  const user = useSelector((state) => state.user);
  const [notificationsArray, setNotificationsArray] = useState([]);
  const [notifications, setNotifications] = useState("");

  useEffect(() => {
    const getRequest = async () => {
      setNotificationsArray(await userApi.getNotifications(user.current._id));
    };

    getRequest();
  }, [user]);

  useEffect(() => {
    if (notificationsArray.length > 0) {
      setNotifications(
        notificationsArray.map((value) => {
          return (
            <div>
              <strong>{value.subject}</strong>
              <p>{value.message}</p>
              <NotifitationsButton
                type={value.type}
                typeID={value.typeID}
                read={value.read}
              />
            </div>
          );
        })
      );
    } else {
      setNotifications("No notifications");
    }
  }, [notificationsArray]);

  return <div>{notifications}</div>;
};
