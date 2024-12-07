const searchGithub = async () => {
  try {
    // Log all environment variables to verify they're being accessed correctly
    console.log('All Environment Variables:', import.meta.env);
    
    // Access the token
    const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
    if (!githubToken) {
      throw new Error('GitHub token is not defined in the environment variables.');
    }
    
    console.log('GitHub Token:', githubToken); // Log the token

    const response = await fetch(`https://api.github.com/users?since=54323534`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json(); // Get error details
      throw new Error(`Error ${response.status}: ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('An error occurred while fetching candidates:', err);
    return []; // Return an empty array on error
  }
};

const searchGithubUser = async (username: string) => {
  try {
    // Access the token
    const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
    if (!githubToken) {
      throw new Error('GitHub token is not defined in the environment variables.');
    }
    
    console.log('GitHub Token:', githubToken); // Log the token

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json(); // Get error details
      throw new Error(`Error ${response.status}: ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`An error occurred while fetching user ${username}:`, err);
    return {}; // Return an empty object on error
  }
};

export { searchGithub, searchGithubUser };