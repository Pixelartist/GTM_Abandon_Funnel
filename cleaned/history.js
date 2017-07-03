
//test da shit
function(){
  var newItem = {{dataLayer.questionnaire.stepView.question}};
  qgate = parseInt({{dataLayer.questionnaire.stepView.id}});
  if ((typeof qhistory !== "undefined") )
  {
    //check if the new item is undefined
    if ((typeof newItem !== "undefined") ) {
      qhistory.indexOf(newItem) === -1 ? qhistory.push(newItem) : console.log("This item already exists");
    }
  } else {
     qhistory = [];
   }
	return qhistory;
}
