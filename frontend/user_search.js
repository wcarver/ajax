const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.find('input');
    this.$ul = $('ul.users');
    this.handleInput();
    // debugger
  }

  handleInput(){
    this.input.keyup( (e) => {
      // debugger
      // e.preventDefault();

      $.ajax({
        method: "get",
        url: "/users/search",
        dataType: "json",
        data: {query: e.currentTarget.value},
        success: function(response) {
          console.log(response);
          this.renderResults(response);
        }.bind(this)
      });
    });
  }

  renderResults(response) {
    this.$ul.empty();
    response.forEach( (res) => {
      let id = res["id"]
      let followed = res["followed"]
      this.$ul.append("<li><a href ='/users/"+id+"'>"+res["username"]+"</a></li>");
      let $li = this.$ul.find("li");
      $li.last().append('<button type="button" name="button"\
      class="follow-toggle" data-follow="'+followed+'" data-id="'+ id +'"></button>');

      let buttons = [];
      let element = $('button.follow-toggle');
      element.each(function(idx,el) {
        buttons.push(new FollowToggle(el));
      });

    });

  }

}

module.exports = UsersSearch;
