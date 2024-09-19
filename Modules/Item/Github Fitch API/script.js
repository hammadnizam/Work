const usernameInput = document.getElementById('username');
const fetchProfileButton = document.getElementById('fetch-profile');
const profileContainer = document.getElementById('profile-container');
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profileStats = document.getElementById('profile-stats');

fetchProfileButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            profileContainer.style.display = 'block';
            profileAvatar.src = data.avatar_url;
            profileName.textContent = data.name;
            profileBio.textContent = data.bio;
            profileStats.innerHTML = `
                <li><span>${data.followers}</span> Followers</li>
                <li><span>${data.following}</span> Following</li>
                <li><span>${data.public_repos}</span> Repos</li>
            `;
        } catch (error) {
            console.error(error);
            profileContainer.style.display = 'none';
        }
    }
});