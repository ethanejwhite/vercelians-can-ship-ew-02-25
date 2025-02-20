type ReqHeaders = {
  Authorization?: string;
};

let reqHeaders: ReqHeaders = {};

export async function getGithubProfile(username: string) {
  if (!username) return false;

  const githubProfileUrl = `https://api.github.com/users/${username}`;

  try {
    console.log(`Fetching GitHub profile for: ${username}`);

    const res = await fetch(githubProfileUrl, {
      method: "GET",
      headers: reqHeaders,
      // Removed `next: { revalidate: 3600 }`
    });

    if (!res.ok) {
      if (res.status === 404) return "not-found";
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const githubProfile = await res.json();

    if (!githubProfile.name && githubProfile.login) {
      githubProfile.name = githubProfile.login;
    }

    return githubProfile;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return false;
  }
}
