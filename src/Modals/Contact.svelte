<style>
  /* .email span {
    display: none;
  } */
  /* .email:after {
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  } */
</style>
<div>
  <p>Contact</p>
  <form class="flex flex-col justify-start">
    <fieldset>
      <legend>Email</legend>
      <label for="name">Name:</label>
      <input id="name" name="name" type="text" autocomplete="name">
      <label for="subject">Subject:</label>
      <input id="subject" type="text" name="subject" />
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <input type="submit">
    </fieldset>
  </form>
  <a href="https://twitter.com/intent/tweet?screen_name=brastrullo&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @brastrullo</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>