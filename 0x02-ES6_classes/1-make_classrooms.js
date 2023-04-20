import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const rooms = [];
  const sizes = [19, 20, 34];

  for (const size of sizes) {
    const room = new ClassRoom(size);
    rooms.push(room);
  }
  return rooms;
}
