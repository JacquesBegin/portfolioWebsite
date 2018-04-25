var databaseBlogEntries = [
  {
    "id": 1,
    "date": "April 14, 2018",
    "message": "Today I embark on my journey to become a web developer, No longer am I just a student or a novice, <strong>I am now a web developer</strong>. I might not be the greatest yet, but I must know and believe that I am already a web developer. No longer will I suffer the imposter syndrome. Let us be honest here, not many companies will give me a chance given my experience, education, and background but that will change now. Here is my goal, my declaration that I make before any and all who read this; <em>\"I will spend the next 30 days learning, studying, asking questions, and producing results that will definitively make me a real life, capable, and sought after web developer.\"</em> That is my goal, the path has been laid out before me and I <strong>will</strong> walk it (and maybe sometimes run it!). I will stumble and fall at times but the path will not change, and I will get back up, brush myself off, and continue on my path to success. You are welcome to join me as you walk your path. This does not need to be a solo trip, I will help where I can. We can all reach our goals, we just have to <em>ask</em>, <em>seek</em>, and <em>knock</em>, and it will be ours. Good luck on your journey, I believe in you and wish you greater success then I wish upon myself.",
    "signature": "-Jacques-"
  },
  {
    "id": 2,
    "date": "April 15, 2018",
    "message": "So to start my journey I will create a portfolio website. This will help me learn and showcase knowledge about building a website from the ground up. My plan is to utilize the technologies of HTML5, CSS3, JavaScript, and jQuery for the frontend tech. The site will be responsive in design. Initially the content on the site will be static but in the near future I will incorporate a web server to serve up content for the blog and interview topics among other things. As I progress I may decide to incorporate frameworks/libraries but do not want to get confused or overwhelmed by adding to many layers of technologies at the beginning. Learn the core first and then add the \"extras\" later.",
    "signature": "-Jacques-"
  },
  {
    "id": 3,
    "date": "April 15, 2018",
    "message": "After doing research I have come up with some core topics that I need to address on the site to show visitors what my development abilities. First will be content related to who I am, what my background is, educational achievements, what I hope to accomplish (in development and outside), what I want to learn (progressive web app, creating and pushing production apps, web server development), where I want to go in the future, etc. Then a section for projects that I have worked on will be added. This will include projects from educational institutions, personal endeavors, and open source related works. There will be this blog, which will be a journal to track my progress and provide insight into my thought process. Also, I will include a section related to topics outside of the coding world because, let us face it, we can not spend all day in front of the computer. There is a whole world out there that is just waiting to be experienced and I am ready to go for it. An additional section that I thought would help answers questions for potential employers is an INTERVIEW TOPICS section. Here I would put information that I have researched and adopted that relates to common development themes such as coding challenges to show computer science concepts, design principles, database topics, working environments and technologies, etc. As the development process advances, there may/will be changes that come up and will be addressed accordingly.",
    "signature": "-Jacques-"
  },
  {
    "id": 4,
    "date": "April 15, 2018",
    "message": "Now that I have a plan started for content on my portfolio site, I am jumping right in to get that content on the screen. It is easy to get bogged down with all the different ways to design and display content so I am taking a \"basics\" approach and just rendering HTML elements with minimal CSS styling. I will use JavaScript and jQuery to dynamically load elements. As I am writing this, I thought of an opportunity to create elements (specific to repeated code blocks) dynamically from content that can be read from a JavaScript object that is created in a \"database\" file. For now, until I get a database attached to the project, I can put all of the blog entries (and associated information) into an array and read over it one at a time and dynamically create elements for blog entries.",
    "signature": "-Jacques-"
  },
  {
    "id": 5,
    "date": "April 15, 2018",
    "message": "Explain about creating a header section that could be injected into the pages from other files so that that code could be easily maintained in one place rather then once on every single page. I set up the header nav links to load a new page depending on which link was clicked and the header.",
    "signature": "-Jacques-"
  },
  {
    "id": 6,
    "date": "April 15, 2018",
    "message": "As I was creating the header/footer injection code I realized that it might be a better user experience (and more efficient) if there majority of the content sections were also loaded this way to eliminate loading repeat data (header/footer/etc) every time the user clicked a link to different content. This led me to create a main content section that would be used to inject content related to the link. When a user clicked a new link, the old content would be removed from the \"content\" section and the new one would load in its place. So I stopped the nav links from redirecting to a new page (by using preventDefault()) and added an event to handle loading content when a link was clicked.",
    "signature": "-Jacques-"
  },
  {
    "id": 7,
    "date": "April 15, 2018",
    "message": "While working on the new link loading system, the link preventDefault() was not working. This was my first real stumbling block. ***add the entry from the notepad*** Link to resource used to solve the issue --> https://stackoverflow.com/questions/27870794/jquery-click-event-preventdefault-not-working",
    "signature": "-Jacques-"
  },
  {
    "id": 8,
    "date": "April 15, 2018",
    "message": "Talk about learning python to use as backend tech for web apps and to learn about machine learning.",
    "signature": "-Jacques-"
  },
  {
    "id": 9,
    "date": "April 15, 2018",
    "message": "As I am creating the blog page, I thought it would be good to load the script file related to the blog content only if the user clicks on the blog link that populates in the mainContent section. However when I do this, there is a warning related to synchronous XMLHttpRequest being deprecated due to the potential for locking the browser and thus making for a bad user experience. For now I will load all script files on the index.html page until I research a better way to achieve this. (Quick research found that a transpiler could be used but this will break my HTML/CSS/JavaScript/jQuery only development for now (transpilers: Babel, Webpack, Browserify, RequireJS), also could use a build tool such as Grunt or Gulp, or could dynamically load scripts through ajax but this may have issues with the timing of said loading). As I am thinking about it, once my web server is up and running, I can load the posts through an ajax request. This will give me the capability to load a few posts at a time rather than everyone all at once.",
    "signature": "-Jacques-"
  },
  {
    "id": 10,
    "date": "April 16, 2018",
    "message": "Early in the wee hours of this new day, the blog posts are finally loading dynamically from my temporary database file!!!! I am so happy and excited for the next challenge as I progress with the portfolio site! Now it is time for some much needed sleep before I continue along the path. Goodnight! :)",
    "signature": "-Jacques-"
  }
]

