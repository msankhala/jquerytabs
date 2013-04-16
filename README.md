## Simple jquery tab plugin
Simple jquery tabs plugin which also change the url hash with the tab id. Or add the tab id in url to directly go to that tab.

Add the markup like this

 `<ul id="tabs">
    <li data-tab="tab1">item1</li>
    <li data-tab="tab2">item2</li>
    <li data-tab="tab3">item3</li>
  </ul>

  <div id="container">
    <div data-tab="tab1">tab1conetnt</div>
    <div data-tab="tab2">tab2conetnt</div>
    <div data-tab="tab3">tab3conetnt</div>
  </div>`

And calle the tabs() function in document.ready() like this:

`$("ul#tabs").tabs("#container");` 
