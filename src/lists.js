const defualtList = [
  {
    title: "Melow's chores",
    id: 0,
    items: [
      {
        id: 0,
        title: 'Hug a kitten',
        completed: false,
      },
      {
        id: 1,

        title: 'Light a candle',
        completed: false,
      },
      {
        id: 2,

        title: 'Eat a watermelon',
        completed: false,
      },
      {
        id: 3,

        title: 'Watch a movie with friends',
        completed: false,
      },
      {
        id: 4,

        title: 'Hike to a waterfall',
        completed: false,
      },
      {
        id: 5,

        title: 'Water the houseplants',
        completed: false,
      },
      {
        id: 6,

        title: 'Throw a birthday party for Pump Kim',
        completed: false,
      },
    ],
  },
];

export const setListItemCompleted = (listId, itemId, completed) => {
  const storedData = getLists();
  console.log(storedData);
  console.log(listId, itemId);
  storedData.find((x) => x.id === listId).items.find((x) => x.id === itemId).completed = completed;
  saveLists(storedData);
};

export const deleteList = (listId) => {
  const storedData = getLists();
  storedData.splice(storedData.indexOf(storedData.find((x) => x.id === listId)), 1);
  saveLists(storedData);
};

export const getLists = () => {
  return JSON.parse(localStorage.getItem('lists'));
};

export const saveLists = (data = lists) => {
  console.log('SAVED : ', data);
  localStorage.setItem('lists', JSON.stringify(data));
};

export let lists = getLists() == null ? defualtList : getLists();
saveLists();
