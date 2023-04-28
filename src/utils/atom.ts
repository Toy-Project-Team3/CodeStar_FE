import { atom } from 'recoil';
import { v1 } from 'uuid';
import { Username } from '@/types/User';

const userState = atom<Username>({
  key: `userState/${v1()}`,
  default: '',
});

export default userState;
