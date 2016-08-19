class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on("submit", this.submit.bind(this));
  }


  submit(e) {
    e.preventDefault();
    let jsonToSend = this.$el.serializeJSON();
    $.ajax( {
      method: 'post',
      url:  '/tweets',
      dataType: "json",
      data: jsonToSend,
      success: function(message) {
        console.log(message);
        let body = message["content"];
        let name = message["user"]["username"];
        let createdAt = message["created_at"];
        if (message["mentions"].length > 0) {
          let mentions = message["mentions"][0]["user"]["username"];
          let mentioneeId = message["mentions"][0]["user"]["id"];
        }
        let id = message["user"]["id"];
       $('#feed').prepend('<li>'+body+'--<a href ="/users/"'+id+'">' +name+'</a>--'+createdAt+'</li>');
       if(message["mentions"].length > 0) {
         $('#feed li').first().append('<ul><li><a href ="/users/'+mentioneeId+'">' +mentions+'</a></li></ul>');
       }
       }.bind(this)
    });
  }




}

module.exports = TweetCompose;
