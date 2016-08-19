class InfiniteTweets {
  constructor(el) {
    this.$el = $(el);
    this.handleFetch();
  }

  handleFetch() {
    $(window).click( (e) => {

        e.preventDefault();
        $.ajax({
          method: "get",
          url: "/feed",
          dataType: "json",
          success: function(response) {
            this.insertTweets(response);
          }.bind(this)
        });
      });
  }

  insertTweets(res) {
      res.forEach( (el, idx) => {
        let t = JSON.stringify(el);
          $('#feed').append("<li>"+el["content"]+"</li>");
      });
  }

}

module.exports = InfiniteTweets;
