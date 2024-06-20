document.addEventListener('DOMContentLoaded', function() {
    const pb = new PocketBase('https://rere3.pockethost.io');

    async function loadMembers() {
        try {
            const result = await pb.collection('members').getList(1, 30);
            const members = result.items;

            if (members && Array.isArray(members)) {
                const imagesContainer = document.getElementById('images-container');
                imagesContainer.innerHTML = ''; // Clear any existing content

                members.forEach((member) => {
                    for (let i = 1; i <= 20; i++) {
                        const profiles = member[`profile_${i}`];
                        const name = member[`name_${i}`];
                        const title = member[`title_${i}`];
                        const email = member[`email_${i}`];

                        if (profiles && profiles.length > 0 && name && title && email) {
                            const memberCard = document.createElement('a');
                            memberCard.classList.add('member-card');
                            memberCard.href = `profile.html?id=${member.id}&profile=${i}`;

                            const imageContainer = document.createElement('div');
                            imageContainer.classList.add('image-container');

                            const firstImage = document.createElement('img');
                            firstImage.src = `https://rere3.pockethost.io/api/files/${member.collectionId}/${member.id}/${profiles[0]}`;
                            firstImage.alt = `${name}'s Profile Image`;
                            firstImage.classList.add('first-image');

                            imageContainer.appendChild(firstImage);

                            if (profiles.length > 1) {
                                const secondImage = document.createElement('img');
                                secondImage.src = `https://rere3.pockethost.io/api/files/${member.collectionId}/${member.id}/${profiles[1]}`;
                                secondImage.alt = `${name}'s Profile Image`;
                                secondImage.classList.add('second-image');

                                imageContainer.appendChild(secondImage);
                                imageContainer.classList.add('two-images');
                            }

                            const memberInfo = document.createElement('div');
                            memberInfo.classList.add('member-info');
                            memberInfo.innerHTML = `
                                <h3>${name}</h3>
                                <p>${title}</p>
                                <p>${email}</p>
                            `;

                            memberCard.appendChild(imageContainer);
                            memberCard.appendChild(memberInfo);
                            imagesContainer.appendChild(memberCard);
                        }
                    }
                });
            } else {
                console.error('Error: No members found or data structure is incorrect.');
            }
        } catch (error) {
            console.error('Error fetching the members:', error);
        }
    }

    // Call the function to load the members
    loadMembers();
});