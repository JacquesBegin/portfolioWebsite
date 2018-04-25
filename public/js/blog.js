
getAllBlogPosts = () => {
  let allBlogPosts = document.createElement("div");
  databaseBlogEntries.forEach((data) => {
    let singleBlogHTML = document.createElement("div");
    singleBlogHTML.innerHTML = `
      <div class="blogEntry">
        <div class="blogDate">
            <span class="blogDateText">${data.date}</span>
        </div>
        <div>
            ${data.message}
        </div>
        <div class="blogSignature">
          <span class="blogSignatureText">${data.signature}</span>
        </div>
      </div>
    `;
    allBlogPosts.appendChild(singleBlogHTML);
  });
  document.getElementById("blogContent").appendChild(allBlogPosts);
};
