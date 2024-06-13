document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get("id");
    if (memberId) {
        fetchMemberData(memberId);
    }
});

function fetchMemberData(memberId) {
    const members = {
        "1": {
            name: "Nele Adrianssens",
            title: "Principle Investigator",
            email: "Nele.Adriaenssens@vub.be",
            crisProfile: "CRIS PROFILE LINK",
            bio: "Assistant professor – VUB Head of research line Vascular Pathology and Oncologic Rehabilitation Head of research chair Andullation Care Research Head of Postgraduate course Vascular Pathology and Oncologic Rehabilitation WG Interprofessional Education in Healthcare Coordinator Oncologic Rehabilitation and Cancer Survivorship - UZ Brussel General Secretary of the Belgian Society of Lymphology",
            image: "images/members/Principle Investigators/RERE_010.jpg"
        },
        "2": {
            name: "David Beckwee",
            title: "Principle Investigator",
            email: "Nele.Adriaenssens@vub.be",
            crisProfile: "CRIS PROFILE LINK",
            bio: "Biography for Nele Adrianssens.",
            image: "images/members/Principle Investigators/FRIA_013.jpg"
        }
    };

    const member = members[memberId];
    if (member) {
        document.getElementById("profileImage").src = member.image;
        document.getElementById("memberName").innerText = member.name;
        document.getElementById("memberTitle").innerText = member.title;
        document.getElementById("memberEmail").innerText = member.email;
        document.getElementById("crisProfile").innerText = member.crisProfile;
        document.getElementById("memberBio").innerText = member.bio;
    }
}