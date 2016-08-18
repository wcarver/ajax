class FollowToggle {
  constructor(el) {
      this.$el = $(el);
      this.userId = parseInt(this.$el.attr("data-id"));
      if(this.$el.attr("data-follow") === "true") {
        this.followState = true;
      } else {
        this.followState = false;
      }
      this.render();
      this.handleClick();
  }

  render() {
    if (this.followState) {
      this.$el.text("Unfollow!");
    } else {
      this.$el.text("Follow!");
    }
  }

  handleClick() {
    this.$el.click( (e) =>  {
      e.preventDefault();
        if (this.followState) {
          this.executeAjax("delete", false);
      } else {
          this.executeAjax("post", true);
      }
    });
  }

  executeAjax(method, boolean) {
    $.ajax ( {
      method: method,
      url: "/users/"+this.userId+"/follow",
      dataType: "json",
      success: function(message) {
        console.log(message);
        this.followState = boolean;
        this.render();
      }.bind(this)
    });
  }
}

module.exports = FollowToggle;
