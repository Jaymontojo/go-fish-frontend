import {db} from '../firestore/config';
import {collection, getDocs } from 'firebase/firestore'

class Fish {
  constructor() {
    this.fishCollectionRef = collection(db, "fish")
  }
  async getAll() {
    try {
      const res = await getDocs(this.fishCollectionRef);
      return res.docs.map((doc) => ({...doc.data()}));
    } catch(err) {
      console.error(err)
    }
  }
}

export default new Fish();