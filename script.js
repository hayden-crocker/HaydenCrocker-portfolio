const projects = document.querySelectorAll('.summary')
const allProjects = document.querySelectorAll('.recentProjects')

projects.forEach((item) => {
    item.addEventListener('click', (e) => {
        // console.log(e.target.style)
        // e.target.style.display = "flex"
        e.target.style.backgroundColor = "rgba(0, 0, 0, 1)"
        for (element in e.target.children) {
            e.target.style.zIndex = "10"
        }
        // if (e.target.style.zIndex === "-10") {
        //     e.target.style.zIndex = "10"
        // } else if (e.target.style.zIndex === "10") {
        //     e.target.style.zIndex = "-10"
        // }
    })
})