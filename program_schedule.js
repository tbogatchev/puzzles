/*We have a machine that we want to run different programs on according to a schedule (start time and execution duration) everyday. We want to check if a new program can be added to the schedule on the same machine.

Example:
Already Scheduled: P1(10, 5), P2(25, 15)
New Program (18, 7) => can schedule
New Program (12, 10) => cannot schedule
*/

// newProgram -> [start, end]
canScheduleNewProgram = (newProgram) => {
//sort the already scheduled (n log n), assign to variable sortedSchedule

	let smallestPossibleIndex = binarySearch(sortedSchedule, newProgram[0], 0, sortedSchedule.length - 1);
	let programAtIndex = sortedSchedule[smallestPossibleIndex];
	let nextIndex = smallestPossibleIndex + 1; //check if this is in bounds
	let programAtNextIndex = sortedSchedule[nextIndex];

  
  //TODO move this into the binary search
	while (newProgram[0] < programAtIndex[0]) {
		const doesExistingEndBeforeNewStart = (programAtIndex[0] + programAtIndex[1]) < newProgram[0];
		const doesNewEndBeforeNextStart = (newProgram[0] + newProgram[1] < programAtNextIndex[0]);
		if (doesExistingEndBeforeNewStart && doesNewEndBeforeNextStart) {
			return true;
		}
		smallestPossibleIndex = nextIndex;
		nextIndex++;
		programAtIndex = sortedSchedule[smallestPossibleIndex];
		programAtNextIndex = sortedSchedule[nextIndex];
  }
  return false;
}


const binarySearch = (schedule, newProgramStartTime, leftIndex, rightIndex) => {
	const leftStartTime = schedule[leftIndex];

	const middleIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;

	if (newTime < leftStartTime) {
		return leftIndex;
	}

	if (rightIndex <= leftIndex) {
		return -1;
  }

	const midStartTime = schedule[midIndex];
	if (newProgramStartTime < midStartTime) {
		return binarySearch(schedule, newTime, leftIndex, middleIndex);
	} else {
		return binarySearch(schedule, newTime, middleIndex + 1, rightIndex);
	}

}
