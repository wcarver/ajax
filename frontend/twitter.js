const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./user_search.js');

$(()=>{

  let buttons = [];
  let element = $('button.follow-toggle');
  element.each(function(idx,el) {
    buttons.push(new FollowToggle(el));
  });

  let search = [];
  let fields = $('.users-search input');
  // debugger
  fields.each(function(odx,el) {
    search.push(new UsersSearch(el));
  });
});
