import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({
        _id: 2345,
        name: 'Crash on load',
        details: 'Crashes after 3 seconds',
        steps: "Open Application and it will crash",
        version: "V2.0",
        assigned: "Don Barto",
        creator: "Jimmy Cliff",
        priority: 1,
        time: "23:38",
    }));
    data.push(new bugModel({
        _id: 89765,
        name: 'slow load on load',
        details: 'takes 4 minutes to load',
        steps: "Open Application and it will take 4 minutes",
        version: "V2.0",
        assigned: "Don Barto",
        creator: "Jimmy Cliff",
        priority: 3,
        time: "23:38",
    }));

    let sorted = data.sort((a,b) => {return a.priority - b.priority});

    return sorted;

}