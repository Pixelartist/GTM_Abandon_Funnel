< script >
  (function() {
    console.log('loaded unload trigger');
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
          'qeventCategory': 'debug',
          'qeventAction': qhistory.join(' > ')
        });
        console.log('**' + (qhistory.join(' > ')) + '**');
      }
    });

  })(); <
/script>
