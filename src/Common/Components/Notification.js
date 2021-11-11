import React, { useEffect, useState } from 'react';
// Style
import NotificationStyled from 'Styles/Notification';

const Notification = ({ text, seconds, show }) => {
  const [disappear, setDisappear] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    if (show) {
      const timeId = setTimeout(() => {
        setDisappear(true);
      }, seconds * 1000);

      return () => {
        clearTimeout(timeId);
      };
    }
    return null;
  }, [show]);

  useEffect(() => {
    if (disappear) {
      const removeTimeout = setTimeout(() => {
        setRemove(true);
        setDisappear(true);
      }, 2000);

      return () => {
        clearTimeout(removeTimeout);
      };
    }
    return null;
  }, [disappear]);

  useEffect(() => {
    if (remove) {
      const removeTimeout = setTimeout(() => {
        setRemove(false);
      }, 2000);

      return () => {
        clearTimeout(removeTimeout);
      };
    }
    return null;
  }, [remove]);

  if (remove || !show) return null;

  return (
    <NotificationStyled className={disappear ? 'disappear' : null}>
      <div className="text">
        {text}
      </div>
    </NotificationStyled>
  );
};

export default Notification;
