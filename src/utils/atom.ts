import { atom } from 'recoil';
import { v1 } from 'uuid';
import { Username } from '@/types/User';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userState = atom<Username>({
  key: `userState/${v1()}`,
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export default userState;
