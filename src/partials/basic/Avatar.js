import React from 'react';
import InitialAvatar from 'react-initials-avatar';

import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import '../../css/additional-styles/avatar.css';

export default function Avatar({ name, size = 'md' }) {
  return <InitialAvatar name={name} className={`initials-avatar ${size}`} />;
}
