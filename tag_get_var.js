<script>
  (function() {
    console.log('loaded unload trigger');
    window.addEventListener('beforeunload', function() {
      console.log('added event listener');

      if ((qhistory.length) && (qgate <= 16))  {
        console.log('qhistory condition entered');
        console.log('qgate is - ' + qgate);
        console.log('qgatecalcres is - ' + (qgate + 2));
        window.dataLayer.push({
          'event' : 'formAbandonment',
          'qeventCategory' : 'debug',
          'qeventAction' : qhistory.join(' > ')
          });
        console.log('**'+ (qhistory.join(' > ')) +'**');
      }
    });

  })();
</script>
