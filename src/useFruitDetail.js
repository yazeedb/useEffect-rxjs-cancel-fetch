import { useEffect, useState } from 'react';
import { defer } from 'rxjs';
import { getFruit } from './api';

export const useFruitDetail = fruitName => {
  const [fruitDetail, setFruitDetail] = useState(null);

  useEffect(
    () => {
      if (!fruitName) {
        return;
      }

      const subscription = defer(() => getFruit(fruitName)).subscribe(
        setFruitDetail
      );

      return () => {
        subscription.unsubscribe();
      };
    },
    [fruitName]
  );

  return fruitDetail;
};
