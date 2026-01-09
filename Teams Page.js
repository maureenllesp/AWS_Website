// Team data mapping
const teamData = {
    'Executives': {
        banner: "url('assets/placeholderPhoto2.jpg')",
        members: [['Kelcey Cruz', 'Chief Executive Officer', "url('assets/placeholderPhoto2.jpg')"], 
        ['Angela Samboa', 'Vice President', "url('assets/placeholderPhoto2.jpg')"]]
    },
    'Operations': {
        banner: "url('assets/about-banner.jpg')",
        members: []
    },
    'Marketing': {
        banner: "url('assets/services-banner.jpg')",
        members: []
    },
    'Creatives': {
        banner: "url('assets/contact-banner.jpg')",
        members: []
    },
    'Communications': {
        banner: "url('assets/contact-banner.jpg')",
        members: []
    },
    'Relations': {
        banner: "url('assets/contact-banner.jpg')",
        members: []
    },
    'Technology': {
        banner: "url('assets/placeholderPhoto.jpg')",
        members: [['Maureen Espinosa', 'Chief Technology Officer', "url('assets/placeholderPhoto3.jpg')"], 
        ['Nichole Velasquez', 'Committee', "url('assets/placeholderPhoto2.jpg')"], 
        ['Kier Pascua', 'Committee', "url('assets/placeholderPhoto.jpg')"]]
    }
};

function teamBannerChange(teamTab, clickedElement) {
    const team = teamData[teamTab];
    if (!team) return;
    
    // Remove active class from all nav items
    document.querySelectorAll('.teamsNavItems').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    if (clickedElement) {
        clickedElement.classList.add('active');
    }
    
    // Update banner
    document.documentElement.style.setProperty('--teams-banner', team.banner);
    
    // Update members
    if (team.members.length > 0) {
        teamMemberChange(team.members);
    }
}

function teamMemberChange(members) {
    const container = document.querySelector('#teamMembers .container-sm');
    if (!container) return;
    
    container.innerHTML = '';
    members.forEach(([name, role, memberPhoto]) => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'col-3 members_Icons';
        memberDiv.innerHTML = `
            <center>
                <img src="assets/MemberIconPlaceholder.png" width="30%">
                <hr width="50px" height="2px">
                <h3>${name}</h3>
                <p>${role}</p>
            </center>
        `;

        memberDiv.addEventListener('click', function() {
            if (memberPhoto) {
                document.documentElement.style.setProperty('--teams-banner', memberPhoto);
            }
        });

        container.appendChild(memberDiv);
    });
}

// Event listeners are attached in HTML file at the bottom