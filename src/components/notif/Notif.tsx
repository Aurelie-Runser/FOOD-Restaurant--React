import { ReactNode, useEffect } from 'react';
import { createPortal } from "react-dom";

import './Notif.css';

interface NotifProps {
  children: ReactNode;
  duration?: number;
  onClose: () => void;
}

export default function Notif({ children, duration = 5000, onClose }: NotifProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer); // Nettoyage du timer lors du démontage du composant
  }, [duration, onClose]);

  return createPortal(
    <div className="notif">
      <p>{children}</p>
    </div>,
    document.body
  );
}