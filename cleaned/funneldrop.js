<script>
  (function() {
    window.addEventListener('beforeunload', function() {
      if ((qhistory.length) && (qgate <= 16)) {
        window.dataLayer.push({
          'event': 'formAbandonment',
          'qeventCategory': 'debug',
          'qeventAction': qhistory.join(' > ')
        });
      }
    });
  })();
</script>
