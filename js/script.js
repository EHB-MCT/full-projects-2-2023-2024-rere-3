
function searchMembers() {
    
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();

    
    var projects = document.getElementsByClassName('project-text');

    
    for (var i = 0; i < projects.length; i++) {
        var text = projects[i].textContent || projects[i].innerText;
        var projectContainer = projects[i].closest('.project');
        if (text.toUpperCase().indexOf(filter) > -1) {
            projectContainer.style.display = "";
        } else {
            projectContainer.style.display = "none";
        }
    }
}


function clearSearch() {
    document.getElementById('searchInput').value = '';
    
    var projects = document.getElementsByClassName('project');
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "";
    }
}






