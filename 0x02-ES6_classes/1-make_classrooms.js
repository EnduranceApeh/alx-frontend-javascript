/* eslint-disabled */
import ClassRoom from "./0-classroom.js";

export default function itializeRooms() {
	const classRoom1 = new ClassRoom(19);
	const classRoom2 = new ClassRoom(20);
	const classRoom3 = new ClassRoom(34);

	const classRooms = [
		classRoom1,
		classRoom2,
		classRoom3
	]
	return classRooms;
}
