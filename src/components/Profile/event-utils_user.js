let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'PSC 100',
        start: new Date('March 14, 2023 13:00:00'),
        end: new Date('March 14, 2023 14:30:00')
    },
    {
        id: createEventId(),
        title: 'PSC 100',
        start: new Date('March 16, 2023 13:00:00'),
        end: new Date('March 16, 2023 14:30:00')
    },
    {
        id: createEventId(),
        title: 'ECS 124',
        start: new Date('March 14, 2023 09:00:00'),
        end: new Date('March 14, 2023 10:00:00')
    },
    {
        id: createEventId(),
        title: 'ECS 124',
        start: new Date('March 16, 2023 09:00:00'),
        end: new Date('March 16, 2023 10:00:00')
    },
    {
        id: createEventId(),
        title: 'ECS 164',
        start: new Date('March 13, 2023 17:00:00'),
        end: new Date('March 13, 2023 18:00:00')
    },
    {
        id: createEventId(),
        title: 'ECS 164',
        start: new Date('March 15, 2023 17:00:00'),
        end: new Date('March 15, 2023 18:00:00')
    },
    {
        id: createEventId(),
        title: 'ECS 164',
        start: new Date('March 17, 2023 17:00:00'),
        end: new Date('March 17, 2023 18:00:00')
    },
]

export function createEventId() {
    return String(eventGuid++)
}