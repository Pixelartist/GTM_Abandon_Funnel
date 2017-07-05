//test da shit
function(){

  var newItem = {{dataLayer.questionnaire.stepView.question}};
  qgate = parseInt({{dataLayer.questionnaire.stepView.id}});
  console.log('data stepview id - ' + qgate);
  console.log(typeof qgate);

  if ((typeof qhistory !== "undefined") )
  {
    console.log('qhistory already defined');
    //check if the new item is undefined
    if ((typeof newItem !== "undefined") ) {
      console.log('newitem already defined');
      qhistory.indexOf(newItem) === -1 ? qhistory.push(newItem) : console.log("This item already exists");
    }
    else {
      console.log('newItem not defined - not trying to add');
    }

  } else {
     console.log('qhistory not defined');
     qhistory = [];
   }

  console.log('newitem - ' + newItem);
	console.log('qhistory - ' + qhistory);

	return qhistory;
}
