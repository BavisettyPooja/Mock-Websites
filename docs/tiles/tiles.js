function hover(element) {
    var newsrc='new_'+element.getAttribute('src')
   element.setAttribute('src', newsrc);
  }
  
  function unhover(element) {
    var newsrc=element.getAttribute('src').split('_')
    element.setAttribute('src', newsrc[1]);
  }