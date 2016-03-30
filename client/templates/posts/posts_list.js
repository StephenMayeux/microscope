var postsData = [

  {
    title: 'ESLhiphop',
    url: 'http://eslhiphop.com'
  },
  {
    title: 'My Skype Teacher',
    url: 'http://myskypeteacher.com'
  },
  {
    title: 'Stephen\'s Portfolio',
    url: 'http://stephenmayeux.com'
  }

];

Template.postsList.helpers({
  posts: postsData
});
