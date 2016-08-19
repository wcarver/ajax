const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./user_search.js');
const TweetCompose = require('./tweet_compose.js');
const InfiniteTweets = require('./infinite_tweets.js');

$(()=>{

  let buttons = [];
  let element = $('button.follow-toggle');
  element.each(function(idx,el) {
    buttons.push(new FollowToggle(el));
  });

  let search = [];
  let fields = $('.users-search');
  // debugger
  fields.each(function(odx,el) {
    search.push(new UsersSearch(el));
  });


  let tweets = [];
  let pageTweets = $('form.tweet-compose');
  pageTweets.each(function(idx, tw) {
    tweets.push(new TweetCompose(tw));
  });

  let infinite = new InfiniteTweets($(window));

});
