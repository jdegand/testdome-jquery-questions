function setup() {
    $.fn.moveUp = function() {
      $(this).insertBefore($(this).prev());
    }
  
     $.fn.moveDown = function() {
      $(this).insertAfter($(this).next());
    }
  
    $('li').find("button:contains('Up!')").click(function() {
      $(this).closest("li").moveUp();
    })
  
    $('li').find("button:contains('Down!')").click(function() {
      $(this).closest("li").moveDown();
    })
    
  }
  
  document.body.innerHTML = `<ol>
    <li><button>Up!</button>Taco<button>Down!</button></li>
    <li><button>Up!</button>Pizza<button>Down!</button></li>
    <li><button>Up!</button>Eggs<button>Down!</button></li>
  </ol>`;
  
  setup();
  $("button").get(2).click();
  
  console.log(document.body.innerHTML);