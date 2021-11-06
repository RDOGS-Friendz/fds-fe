import React, { useState, useEffect } from 'react';
import InitialAvatar from 'react-initials-avatar';
import stringHash from 'string-hash';

import '../../css/additional-styles/avatar.css';

export default function Avatar({ name, size = 'md', color = null }) {
  const [computedColor, setComputedColor] = useState('indigo');

  useEffect(() => {
    const colors = ['indigo', 'light-blue', 'green', 'yellow', 'red', 'blue'];
    if (color == null) {
      setComputedColor(colors[stringHash(name) % colors.length]);
    } else {
      setComputedColor(color);
    }
  }, [color, name]);

  switch (computedColor) {
    case 'indigo':
      return <InitialAvatar name={name} className={`initials-avatar ${size} bg-indigo-600`} />;
    case 'light-blue':
      return <InitialAvatar name={name} className={`initials-avatar ${size} bg-light-blue-600`} />;
    case 'green':
      return <InitialAvatar name={name} className={`initials-avatar ${size} bg-green-600`} />;

    case 'yellow':
      return <InitialAvatar name={name} className={`initials-avatar ${size} bg-yellow-600`} />;
    case 'red':
      return <InitialAvatar name={name} className={`initials-avatar ${size} bg-red-600`} />;
    case 'blue':
      return <InitialAvatar name={name} className={`initials-avatar ${size} bg-blue-600`} />;
    default:
      return <InitialAvatar name={name} className={`initials-avatar ${size} bg-indigo-600`} />;
  }
}
