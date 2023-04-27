import { atom } from 'recoil';
import { v1 } from 'uuid';

const userState = atom({
  key: `userState/${v1()}`,
  default: '',
});

export default userState;
