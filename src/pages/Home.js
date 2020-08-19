import React, { useState } from 'react';
import Button from '../components/Button'

export default function Home() {
  const [title, setTitle] = useState('test');
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {title}
        </p>
        <Button
          label="Button 1"
        />
      </header>
    </div>
  );
}