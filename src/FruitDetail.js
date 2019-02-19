import React from 'react';

export const FruitDetail = ({
  name,
  color,
  calories,
  totalFatGrams,
  sodiumMg,
  proteinGrams
}) => {
  return (
    <div className="fruit-detail">
      <h3 style={{ color, textTransform: 'capitalize' }}>
        {name || 'Loading fruit...'}
      </h3>
      <p>Calories: {calories}</p>
      <p>Total Fat: {totalFatGrams}g</p>
      <p>Sodium: {sodiumMg}mg</p>
      <p>Protein: {proteinGrams}g</p>
    </div>
  );
};
