let vis = "none"
let vis1 = "inline-flex"


function changeRole() {
    let role1sp = document.getElementById('role-1')
    let role2sp = document.getElementById('role-2')
    role1sp.style.display = vis
    role2sp.style.display = vis1
    let temp = vis
    vis = vis1
    vis1 = temp
}

setInterval(changeRole, 8000);
