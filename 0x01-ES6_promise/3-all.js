import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const photo = responses[0].body;
      const user = `${responses[1].firstName} ${responses[1].lastName}`;
      console.log(`${photo} ${user}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
