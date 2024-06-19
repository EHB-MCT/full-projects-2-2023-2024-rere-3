async function initializePocketBaseAndFetchMembers() {
    try {
        // Check if PocketBase is defined
        if (typeof PocketBase === 'undefined') {
            throw new Error('PocketBase is not defined. Make sure pocketbase.min.js is loaded correctly.');
        }

        const pb = new PocketBase('https://rere3.pockethost.io');

        // Set API key
        pb.authStore.save('x8qyauc0dhfrn8v');

        // Fetch members
        const records = await pb.collection('members').getFullList(200 /* batch size */, {
            sort: '-created'
        });

        console.log('Fetched records:', records); // Log the fetched records

        displayMembers(records);
    } catch (error) {
        console.error('Error initializing PocketBase or fetching members:', error);
    }
}

function displayMembers(records) {
    const membersList = document.getElementById('membersList');
    membersList.innerHTML = '';

    records.forEach((record, index) => {
        console.log('Processing record:', index, record); // Log each record being processed

        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        memberDiv.setAttribute('data-id', record.id);

        const profileImg = record.profile_1 ? `https://rere3.pockethost.io/api/files/members/${record.id}/${record.profile_1[0]}` : 'avatar_placeholder.png';

        memberDiv.innerHTML = `
            <a href="member_selected.html?id=${record.id}">
                <img src="${profileImg}" alt="Member Avatar" class="avatar">
            </a>
            <div class="details">
                <p class="name">${record.name_1}</p>
                <p class="title">${record.title_1}</p>
                <p class="email">${record.email_1}</p>
            </div>
        `;

        membersList.appendChild(memberDiv);
    });
}

function searchMembers() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const members = document.getElementsByClassName('member');

    Array.from(members).forEach(member => {
        const name = member.querySelector('.name').textContent.toLowerCase();
        const title = member.querySelector('.title').textContent.toLowerCase();

        if (name.includes(filter) || title.includes(filter)) {
            member.style.display = '';
        } else {
            member.style.display = 'none';
        }
    });
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchMembers();
}

document.addEventListener('DOMContentLoaded', () => {
    initializePocketBaseAndFetchMembers();
});
