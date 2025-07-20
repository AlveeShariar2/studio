import { db } from './firebase';
import { ref, onValue, type Unsubscribe } from 'firebase/database';

export const listenToChildData = (callback: (data: any) => void): Unsubscribe => {
  const childDataRef = ref(db, 'childData/');
  return onValue(childDataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
