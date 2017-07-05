<script>
  (function() {
    console.log('loaded unload trigger');
    // set and prefill qhistory
    var newItem = {{dataLayer.questionnaire.stepView.question}};
    qgate = parseInt({{dataLayer.questionnaire.stepView.id}});

    if ((typeof qhistory == "undefined")) {
      qhistory = [];
      console.log('initialized qhistory Alpha Stage');
      console.log('Alpha Stage load is ' + {{dataLayer.questionnaire.stepView.question}});
      if ((typeof newItem !== "undefined")) {
        qhistory.indexOf(newItem) === -1 ? qhistory.push(newItem) : console.log("This item already exists Alpha Stage ");
        console.log('Alpha Stage after initialized qhistory is ' + qhistory);
      }
    } else {
      if ((typeof newItem !== "undefined")) {
        qhistory.indexOf(newItem) === -1 ? qhistory.push(newItem) : console.log("This item already exists Alpha Stage ");
        console.log('Alpha Stage qhistory is ' + qhistory);
      }
    }
    // set and prefill end

    window.addEventListener('beforeunload', function() {
      console.log('added event listener');

      switch (dataLayer["0"].site.locale) {
        case "en_US":
          var qkey = 18;
          break;
        case "ko_KR":
          var qkey = 11;
          break;
        default:
          var qkey = 16;
      }

      console.log(qkey);

      if ((qhistory.length) && (qgate <= qkey)) {
        console.log('qhistory condition entered');
        console.log('qgate is - ' + qgate);
        console.log('qgatecalcres is - ' + (qgate + 2));
        window.dataLayer.push({
          'event': 'formAbandonment',
          'qeventCategory': 'Abandonment',
          'qeventAction': qhistory.join(' > ')
        });
        console.log('**' + (qhistory.join(' > ')) + '**');
      }
    });

  })();
  </script>
