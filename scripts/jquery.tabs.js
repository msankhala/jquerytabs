jQuery.fn.tabs = function(control){
  var element = $(this);
  control = $(control);
  
  element.delegate("li", "click", function(){ 
    // Retrieve tab name
    var tabName = $(this).attr("data-tab");
    // Fire custom event on tab click    
    element.trigger("change.tabs", tabName);
  });
  // Bind to custom event 
  element.bind("change.tabs", function(e, tabName){
  element.find("li").removeClass("active");
  element.find(">[data-tab='" + tabName + "']").addClass("active"); });
  
  element.bind("change.tabs", function(e, tabName){   
  control.find(">[data-tab]").removeClass("active");
  control.find(">[data-tab='" + tabName + "']").addClass("active");
  });
  var firstName = element.find("li:first").attr("data-tab"); 
  element.trigger("change.tabs", firstName);

  //Chage the url hash wit the tab id 
    //change the hash of window.
  element.bind("change.tabs", function(e, tabName){ 
    window.location.hash = tabName;
  });

  $(window).bind("hashchange", function(){
    var tabName = window.location.hash.slice(1); 
    $("#tabs").trigger("change.tabs", tabName);
  });

  return this;
};
$(function(){
  $("ul#tabs").tabs("#container");
});
