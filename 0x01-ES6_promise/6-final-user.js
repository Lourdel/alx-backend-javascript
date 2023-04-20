import signUpcreatedUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const response = [];

  try {
    const createdUser = await signUpcreatedUser(firstName, lastName);
    response.push({ status: 'fulfilled', value: createdUser });

    await uploadPhoto(fileName);
  } catch (err) {
    const errorMessage = `Error processing ${fileName}: ${err.message}`;
    response.push({ status: 'rejected', value: errorMessage });
  }

  return response;
}
