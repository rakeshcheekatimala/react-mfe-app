import React from 'react';
import { useState, useEffect } from 'react';
import { BREEDS_API_URL } from './constants';

const localCache = {};

export default function useBreedList(animal) {
  console.log('animal', animal, 'localCache', localCache);
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');
      const result = await fetch(`${BREEDS_API_URL}?animal=${animal}`);
      const json = await result.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]);

  return [breedList, status];
}
