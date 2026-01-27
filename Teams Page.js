window.onload = function () {
    setTimeout(()=>{
        window.scrollTo(0, 0);
    }, 200)
}

// Team data mapping
const teamData = {
    'Executives': {
        banner: "url('assets/placeholderPhoto2.jpg')",
        members: [['Kelcey Cruz', 'Chief Executive Officer', "url('assets/placeholderPhoto2.jpg')"], 
        ['Angela Samboa', 'Vice President', "url('assets/placeholderPhoto2.jpg')"],
        ['Dave Matthew Punsalan', 'Secretary', "url('assets/placeholderPhoto.jpg')"],
        ['Joshua Tumamao', 'Chief Finance Officer', "url('assets/placeholderPhoto3.jpg')"]]
    },
    'Operations': {
        banner: "url('assets/about-banner.jpg')",
        members: [['Bien Carlo Grafil', 'Chief Operations Officer', "url('assets/placeholderPhoto.jpg')"],
        ['Gabriel John Solomon', 'Vice-Chief Operations Officer', "url('assets/placeholderPhoto2.jpg')"],
        ['Gwen Lopez', 'Secretary of Operations Officer', "url('assets/placeholderPhoto3.jpg')"]]
    },
    'Marketing': {
        banner: "url('assets/services-banner.jpg')",
        members: [['Bianca Elaine Adame', 'Chief Marketing Officer', "url('assets/placeholderPhoto3.jpg')"],
        ['Watson Dongon', 'Vice-Chief Marketing Officer', "url('assets/placeholderPhoto.jpg')"],]
    },
    'Creatives': {
        banner: "url('assets/contact-banner.jpg')",
        members: [['Jahzeel Agustin', 'Chief Creatives Officer', "url('assets/placeholderPhoto.jpg')"],
        ['Alyssa Santillan', 'Vice-Chief Creatives Officer', "url('assets/placeholderPhoto2.jpg')"],
        ['Lorenzo Gloria', 'Committee', "url('assets/placeholderPhoto3.jpg')"],
        ['Sairus Talavera', 'Committee', "url('assets/placeholderPhoto.jpg')"],
        ['Janessa Manuel', 'Committee', "url('assets/placeholderPhoto2.jpg')"]]
    },
    'Communications': {
        banner: "url('assets/contact-banner.jpg')",
        members: [['Kyle Sy', 'Chief Communications Officer', "url('assets/placeholderPhoto2.jpg')"], 
        ['Nicole Lim', 'Committee', "url('assets/placeholderPhoto3.jpg')"]]
    },
    'Relations': {
        banner: "url('assets/contact-banner.jpg')",
        members: [['Dale Wilson Espirityo', 'Chief Relations Officer', "url('assets/placeholderPhoto.jpg')"],
        ['Chang Park', 'Vice-Chief Relations Officer', "url('assets/placeholderPhoto2.jpg')"],]
    },
    'Technology': {
        banner: "url('assets/placeholderPhoto.jpg')",
        members: [['Maureen Espinosa', 'Chief Technology Officer', "url('assets/placeholderPhoto3.jpg')"], 
        ['Nichole Velasquez', 'Committee', "url('assets/placeholderPhoto2.jpg')"], 
        ['Kier Pascua', 'Committee', "url('assets/placeholderPhoto.jpg')"],
        ['Alfred Anaud', 'Committee', "url('assets/placeholderPhoto3.jpg')"],
        ['Enzo Azuelo', 'Committee', "url('assets/placeholderPhoto2.jpg')"]]
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
        memberDiv.className = 'col-lg-3 col-sm-12 members_Icons';
        memberDiv.innerHTML = `
            <center>
                <img src="assets/MemberIconPlaceholder.png" width="100px">
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