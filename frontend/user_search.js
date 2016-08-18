class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.val();
    this.$ul = $('ul.users');
    this.handleInput();
    // debugger
  }

  handleInput(){
    this.$el.keypress( (e) => {
      // debugger
      // e.preventDefault();

      $.ajax({
        method: "get",
        url: "/users/search",
        dataType: "json",
        data: this.$el.serialize(),
        success: function(response) {
          console.log(response);
        }.bind(this)
      });
    });
  }
}

module.exports = UsersSearch;
