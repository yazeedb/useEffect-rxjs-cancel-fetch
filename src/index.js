import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FruitDetail } from './FruitDetail';
import { getFruitsNames, getFruit } from './api';
import { useFruitDetail } from './useFruitDetail';
import './styles.css';

function App() {
  const [fruitNames, setFruitNames] = useState([]);
  const [currentFruit, setCurrentFruit] = useState(null);

  useEffect(() => {
    getFruitsNames().then(setFruitNames);
  }, []);

  const fruitDetail = useFruitDetail(currentFruit);

  return (
    <div className="App">
      <h2>Click a fruit for details</h2>
      <ul>
        {fruitNames.map(fruit => (
          <li key={fruit}>
            <button
              onClick={() => {
                setCurrentFruit(fruit);
              }}
            >
              {fruit}
            </button>
          </li>
        ))}
      </ul>

      {currentFruit && <FruitDetail {...fruitDetail} />}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
