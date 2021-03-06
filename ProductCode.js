function createProductCodeForm(parent) {
    var form = $("<form/>");
  
    form.append($("<label>").text('Product Code:'));
    form.append($("<input>").attr('name', 'productCode').attr('type', 'text'));
    form.append($("<label>").attr('name', 'hint').text('The product code can be found on the label.'));
    
    form.append('<br>');
  
    form.append($("<input>").attr('type', 'submit'));
  
    parent.append(form);
    
    $("label").hide();
    
    $("input").on("focus", function(){
      $("label").show();
    });
    
     $("input").on("blur", function(){
      $("label").hide();
    });
  }