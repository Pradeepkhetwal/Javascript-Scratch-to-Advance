//inner html (html written inside any tag)

const headline = document.querySelector(".headline");
headline.innerHTML = "<h1>hello</h1>"
//to write "" inside "" we use \ \
headline.innerHTML = "<button class = \"btn\">Learn More </button>"
console.log(headline.innerHTML)