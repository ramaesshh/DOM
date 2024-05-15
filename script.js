/*const element = document.createElement("div")
element.innerHTML="<p>this is div</p>"
document.body.append(element);

const element2 = document.createElement("div")
element2.innerHTML= "<span>This is a dymanic span </span>"
document.body.append(element2);
*/

/*
const header = document.createElement("header")
const section = document.createElement("section")
const span = document.createElement("span")
const article = document.createElement("article")
const p = document.createElement("p")

span.innerHTML= "This is a span"
p.innerHTML= "This is paragraph"
section.append(span)
article.append(p)
header.append(section,article)
document.body.append(header);
*/


/*const div = document.createElement("div")
const header = document.createElement("header")
const section = document.createElement("section")
const span = document.createElement("span")
const article = document.createElement("article")
const p = document.createElement("p")
const header1 = document.createElement("header")
const section1 = document.createElement("section")
const span1 = document.createElement("span")
const article1 = document.createElement("article")
const p1 = document.createElement("p")

span.innerHTML= "This is a span"
p.innerHTML= "This is paragraph"
span1.innerHTML= "This is span1"
p1.innerHTML= "This is paragraph1"

section.appendChild(span)
article.appendChild(p)
header.append(section,article)
section1.appendChild(span1)
article1.appendChild(p1)
header1.append(section1,article1)
document.body.append(header,header1)
*/


//innerhtml vs innertext

/*const example = document.createElement("div")
example.innerHTML= "<span>This is a span tag</span>"
document.body.append(example)

const example1 = document.createElement("div")
example1.innerText= "<span>This is a span tag</span>"
document.body.append(example1)
*/


/*const att = document.createElement("div")
att.setAttribute("class","container")
att.innerHTML="This is attribute example"
document.body.append(att)
*/

const div = document.createElement("div")
div.setAttribute("class","divcolor")
const header = document.createElement("header")
header.setAttribute("class","headercolor")
const section = document.createElement("section")
section.setAttribute("class","sectioncolor")
const span = document.createElement("span")
span.setAttribute("class","spancolor")
const article = document.createElement("article")
article.setAttribute("class","articlecolor")
const p = document.createElement("p")
p.setAttribute("class","pcolor")
const header1 = document.createElement("header")
header1.setAttribute("class","header1color")
const section1 = document.createElement("section")
section1.setAttribute("class","section1color")
const span1 = document.createElement("span")
span1.setAttribute("class","span1color")
const article1 = document.createElement("article")
article1.setAttribute("class","article1color")
const p1 = document.createElement("p")
p1.setAttribute("class","p1color")

span.innerHTML= "This is a span"
p.innerHTML= "This is paragraph"
span1.innerHTML= "This is span1"
p1.innerHTML= "This is paragraph1"

section.appendChild(span)
article.appendChild(p)
header.append(section,article)
section1.appendChild(span1)
article1.appendChild(p1)
header1.append(section1,article1)
div.append(header,header1)
document.body.append(div)


