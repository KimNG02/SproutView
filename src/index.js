import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Options from './Options';

const Root = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleConfirmPlanting = () => {
    setShowOptions(true);
  };

  return (
    <React.StrictMode>
      {showOptions ? <Options /> : <App onConfirmPlanting={handleConfirmPlanting} />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
