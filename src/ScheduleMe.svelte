<script>
  const startCalendly = () => {
    Calendly.initPopupWidget({url: 'https://calendly.com/brastrullo/meet-brad'});return false;
  };
</script>
<div>
  <!-- Calendly inline widget begin -->
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
  <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
  <a href="#calendly" on:click={startCalendly} class="border-2 px-2 py-1 my-2 border-blue-500 text-blue-500">Schedule time with me</a>
  <!-- <div class="calendly-inline-widget" data-url="https://calendly.com/brastrullo/meet-brad" style="min-width:320px;height:630px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> -->
  <!-- Calendly inline widget end -->
</div>