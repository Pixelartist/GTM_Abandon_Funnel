function() {

  var newItem = {{dataLayer.questionnaire.stepView.question}};
  qgate = parseInt({{dataLayer.questionnaire.stepView.id}});
  console.log('data stepview id - ' + qgate);
  console.log(typeof qgate);

  if ((typeof qhistory == "undefined")) {
    qhistory = [];
    console.log('initialized qhistory');
  } else {
    if ((typeof newItem !== "undefined")) {
      qhistory.indexOf(newItem) === -1 ? qhistory.push(newItem) : console.log("This item already exists");
      console.log('qhistory is ' + qhistory);
    }
  }

  return qhistory;
}
