import { helper } from '@ember/component/helper';

export function avatarGenerater([name,...rest]) {
  let avatar = name[0];
  return `${avatar}`;
}

export default helper(avatarGenerater);
