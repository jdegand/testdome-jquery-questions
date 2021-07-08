function newMessage(topicName) {
    let item = $("div").find(`p[data-topic-name='${topicName}']`);
   
    if(item) {
      return item.css('background-color', 'red');
    }
  }
  
  // Example case
  $('body').html(
    `<div>
      <p data-topic-name="discussion">General discussion</p>
      <p data-topic-name="bugs">Bugs</p>
      <p data-topic-name="animals">Animals</p>
    </div>`
  );
  newMessage("discussion");
  console.log($('body').html());