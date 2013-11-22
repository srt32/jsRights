$(function (){
  var back_to_top = "<a href='#top'>Back to Top</a>";
  $("div.article").append(back_to_top);

  var toc = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>"
  $("h1").after(toc);

  var tocList= "<ul id='toc'></ul>";
  $("h2:first").after(tocList);

  $("div.article h2").each(function () {
    var title = $(this).text();
    var slug = title.trim().toLowerCase().replace(" ", "_");
    var target_anchor = "<a name='" + slug + "'/>";
    $(this).before(target_anchor);
    var target_a_tag = "<a href='#" + slug + "'>" + title + "</a>";
    var list_item = "<li>" + target_a_tag + "</li>";
    $('ul').append(list_item);
    var toggleLink = $("<a href='#'>(hide)</a>");
      toggleLink.on('click', function (event) {
        event.preventDefault();
        $(this).siblings('p').toggle();
        var old_text = $(this).text();
        var new_text = (old_text === '(hide)') ? '(show)' : '(hide)';
        $(this).text(new_text);
      });
    $(this).after(toggleLink);
  });

});
