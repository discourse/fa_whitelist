export default {
  name: "fa_whitelist",
  initialize: function() {
    Discourse.Markdown.whiteListTag('i', 'class', /^fa fa-[a-z\-]+$/);
    Discourse.Markdown.whiteListTag('i', 'style', /^color: #?[a-zA-Z0-9]+;$/);
  }
};
