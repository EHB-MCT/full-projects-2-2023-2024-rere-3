// Function to search members by name or title
function searchMembers() {
    const input = document.getElementById('searchInput');
    const filter = input.value.trim().toLowerCase();
    const members = document.querySelectorAll('#images-container .member-card');

    members.forEach(member => {
        const info = member.querySelector('.member-info').textContent.toLowerCase();

        if (info.includes(filter)) {
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
