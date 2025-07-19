
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';

export const listenToChildData = (callback: (data: any) => void) => {
  const childDataRef = ref(db, 'childData/');
  onValue(childDataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
