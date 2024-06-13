function searchMembers() {
    var input, filter, membersList, members, name, title, i, nameValue, titleValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    membersList = document.getElementById('membersList');
    members = membersList.getElementsByClassName('member');

    for (i = 0; i < members.length; i++) {
        name = members[i].getElementsByClassName('name')[0];
        title = members[i].getElementsByClassName('title')[0];
        nameValue = name.textContent || name.innerText;
        titleValue = title.textContent || title.innerText;

        if (nameValue.toUpperCase().indexOf(filter) > -1 || titleValue.toUpperCase().indexOf(filter) > -1) {
            members[i].style.display = "";
        } else {
            members[i].style.display = "none";
        }
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchMembers(); // Call searchMembers to reset the member list display
}

