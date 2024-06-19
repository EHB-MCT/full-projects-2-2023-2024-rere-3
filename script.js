// Function to search members by name or title
function searchMembers() {
    const input = document.getElementById('searchInput');
    const filter = input.value.trim().toLowerCase();
    const members = document.querySelectorAll('.member');

    members.forEach(member => {
        const name = member.querySelector('.name').textContent.toLowerCase();
        const title = member.querySelector('.title').textContent.toLowerCase();

        if (name.includes(filter) || title.includes(filter)) {
            member.style.display = '';
        } else {
            member.style.display = 'none';
        }
    });
}

// Function to clear search input and show all members
function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = ''; // Clear the search input field
    searchMembers(); // Call searchMembers to reset member visibility
}
