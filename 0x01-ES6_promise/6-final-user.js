import signUpcreatedUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const response = [];

  try {
    const createdUser = await signUpcreatedUser(firstName, lastName);
    response.push({ status: 'fulfilled', value: createdUser });

    await uploadPhoto(fileName);
  } catch (err) {
    response.push({ status: 'rejected', value: `Error: ${fileName} cannot be processed` });
  }

  return response;
}
