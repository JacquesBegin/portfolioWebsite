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
  },
  {
    "id": 11,
    "date": "April 16, 2018",
    "message": "An \"AH HA!\" moment just hit me.....I am going to add my resume and basic cover letter as either separate content sections and/or downloads for users to access. This resume though will include much more information than a typical resume sent for a specific job. This also seems like a \"no duh\" moment but hey, either way it is happening now! lol :)",
    "signature": "-Jacques-"
  },
  {
    "id": 12,
    "date": "April 16, 2018",
    "message": "Added a temporary portrait image to home.html. An interesting thing I realized is that since home.html is being loaded into index.html dynamically, the relative paths for any content on home.html (or any other dynamically loaded content) needs to be relative from index.html not the location of home.html.",
    "signature": "-Jacques-"
  },
  {
    "id": 13,
    "date": "April 16, 2018",
    "message": "Before going any further on the actual website, I am going to push what I have to my hosted portfolio site on GoDaddy.com. The url is www.jacquesbegin.com. I will walk through the tutorial provided by GoDaddy for how to use the cPanel administration application to get an overview of the hosting process.",
    "signature": "-Jacques-"
  },
  {
    "id": 14,
    "date": "April 17, 2018",
    "message": "So it is just past midnight and I have uploaded my portfolio site to GoDaddy hosting. Everything is working normally except for the db folder (which is outside of the public folder) is not being accessed. I'm checking for why this is but may have to call it a night and start fresh in the morning. Here's to new challenges!",
    "signature": "-Jacques-"
  },
  {
    "id": 15,
    "date": "April 17, 2018",
    "message": "A new feature idea! Create the functionality for users to create a quick account on my site and allow them to schedule interviews, meetings, or other conversational events. This would take my website from being just a site to actually being a web application. Users can login to CRUD their requests but don't have to rely solely on my web app for communication. By the user inputting their contact info email/phone/other the web app will automatically send notices to them (if the choose).",
    "signature": "-Jacques-"
  },
  {
    "id": 16,
    "date": "April 17, 2018",
    "message": "So.....I don't like the way I have to store the blog entries in a separate JS file/object to load into the site. My intention was to have them stored in a database and have a web server serve them to the site on an as needed basis (to prevent all entries from being loaded on blog content load). However, the hosting service I have through GoDaddy does not allow for a Node.js application to be setup. <-- this was the planned technology to use for the application. I will do more research for what my available options are, whether that be using a different service to serve the data or move the application entirely to a new service. The challenges are great and make me stronger :) <-- after researching, I have decided to keep going with the static site for now so that I have a portfolio site to show employers/clients. I will develop a new web portfolio application using Node.js and use Heroku to host it. This will be a great experience learning; to use this service and for how to take a local application and bring it to production level.",
    "signature": "-Jacques-"
  },
  {
    "id": 17,
    "date": "April 23, 2018",
    "message": "While adding my image to the home page, I noticed that there was a gap at the bottom of the image between the image and it's surrounding div. I researched and learned this has to do with the image being an inline element. There is a space given below inline elements to account for letters that have descenders, letters that extend lower/higher than other letters (ex. j, q, p, and f). By changing the image element to display as a block element rather than inline solved the issue.",
    "signature": "-Jacques-"
  },
  {
    "id": 18,
    "date": "April 23, 2018",
    "message": "For the last couple hours I've been integrating a new navbar that is much more prominent, is responsive, has hover effect, and has an \"active\" state (a class for showing as being \"selected\") when that link's content is displaying. I integrated the \"active\" state change into the content loader function by finding the parent of the node/element selected, clearing the \"active\" class from any other link, and then adding the \"active\" class to the selected link. On initial load of the site the home link is automatically selected. Now it's off to bed! (2:10am)",
    "signature": "-Jacques-"
  },
  {
    "id": 19,
    "date": "April 23, 2018",
    "message": "As I've been looking through job posts, I continue to see the need for web developer candidates to have experience with SASS, an extension language designed to bring new features into CSS with the intention of boosting developer efficiency and making CSS easier to maintain. So my first order of business for the day is to learn the in's and out's of SASS and bring it into my portfolio site, as both a portfolio piece and in implementation.",
    "signature": "-Jacques-"
  },
  {
    "id": 20,
    "date": "April 23, 2018",
    "message": "So I just read through the \"Learn SASS\" content on the SASS website and I'm very excited to get working with this. There are many helpful features, such as; variables,  partial files, importing CSS files into other files (without multiple HTTP requests), and inheritance to name a few.",
    "signature": "-Jacques-"
  },
  {
    "id": 21,
    "date": "April 24, 2018",
    "message": "I took a break from learning about SASS to work on my site's navigation functionality. I took the responsive design approach, starting with mobile first. I experimented with a few design styles and decided to go with (on mobile/screen sizes below 600px) a link in the upper right corner that, when clicked, displays a drop down menu with links to other content on the site. Since the content is injected into the index.html page using JavaScript, when a user switches between different content/links, their scroll positions are retained (so long as the page is not reloaded) and users can pick up where they left off. Functions added to the code are for; opening/closing the drop down menu and setting the active state of the current content view. The bulk of the work went into styling the navigation. <-- I can see why the SASS extension language would be helpful to prevent duplicating styles through extend/inheritance and variables. This was a great experience and I'm very proud of the progress being made. Everything added today was with CSS and JavaScript only.",
    "signature": "-Jacques-"
  },
  {
    "id": 22,
    "date": "April 25, 2018",
    "message": "I worked on the \"home\" page and added content related to my past and present life. This is meant only to be a short intro into those areas. I think the content might be a little long, especially for a site visitor who justs wants to get a quick idea about me but I don't want to over spend my time focusing on one thing when there is much more content I need to get on the site.",
    "signature": "-Jacques-"
  },
  {
    "id": 23,
    "date": "April 26, 2018",
    "message": "Just finished adding more blogs to the fake database file....!@#$%....I can't wait for this to be managed by backend code and a real database LOL ;)",
    "signature": "-Jacques-"
  }
]

