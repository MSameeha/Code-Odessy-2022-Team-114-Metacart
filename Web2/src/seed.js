/* eslint-disable no-plusplus */
// We replaced the userId with apna auth ID, which we can get from our firebase.
//Don't use the seeDatabase File over again. It only was for initializing the db 
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'wVomd0Dsr0WqLzLkuIBT78g6jza2', //Auth ID we got for the given mail ID, you can find it now on firestore users section 
      username: 'imran',
      fullName: 'imran mirza',
      emailAddress: 'imranmirza@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'castiel',
      fullName: 'Castiel Sanzio Dean Urbino',
      emailAddress: 'castiel@sanzio.com',
      following: [],
      followers: ['wVomd0Dsr0WqLzLkuIBT78g6jza2'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'uriel',
      fullName: 'Urieldor Dalí',
      emailAddress: 'salvador@uriel.com',
      following: [],
      followers: ['wVomd0Dsr0WqLzLkuIBT78g6jza2'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'Hazel',
      fullName: 'Hazel Green Lanchestar',
      emailAddress: 'hazel@green.com',
      following: [],
      followers: ['wVomd0Dsr0WqLzLkuIBT78g6jza2'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Good ol` boys',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
