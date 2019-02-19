import { useEffect, useState } from 'react';
import { from } from 'rxjs';
import { getFruit } from './api';

export const useFruitDetail = fruitName => {
  const [fruitDetail, setFruitDetail] = useState(null);

  useEffect(
    () => {
      if (!fruitName) {
        return;
      }

      const subscription = from(getFruit(fruitName)).subscribe(setFruitDetail);

      return () => {
        subscription.unsubscribe();
      };
    },
    [fruitName]
  );

  return fruitDetail;
};
