const links = [
    {
        label: "Week1 Notes",
        url: "week1/helloWorld.html"
        
    },
    {
        label: "Week 2 Team Activity",
        url: "week2/w02TeamActivity.html",
    },
    {
        label: "Week 3 Team Activity",
        url: "week3/w03TeamActivity.html",
    }
]

const ol = document.getElementById("test");

for (let i of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", i.url);
    a.innerHTML = i.label;
    li.appendChild(a);
    ol.appendChild(li);
}