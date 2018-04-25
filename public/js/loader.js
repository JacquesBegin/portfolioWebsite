$(document).ready(function(){

  $(function(){
    $("#header").load("html/header.html");
    $("#mainContent").load("html/home.html");
  });

  $(document).on("click", ".headerLink", function(event){
    closeDropDown(event);
    let target = $(event.target).data("link-content").toString();
    if (target !== "github") {
      event.preventDefault();

      // This will load the content related to the link clicked.
      $("#mainContent").load("html/" + target + ".html", function(){
        console.log(`${target} tab loaded`);
        setActiveState(event.currentTarget);
        if (target === "blog") {
          getAllBlogPosts();
        }
      });
    }
  });
});
