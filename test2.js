async function fetchUserProfile(userId) {
  console.log(`Fetching data for user ${userId}...`);
  
  try {
    // Simulating a network request that takes 1.5 seconds
    const profile = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating a successful response
        resolve({ id: userId, username: "dev_ninja", role: "Admin" });
      }, 1500);
    });
    
    return `Success: ${profile.username} logged in as ${profile.role}.`;
    
  } catch (error) {
    return `Failed to fetch data: ${error.message}`;
  }
}

// Calling the async function
fetchUserProfile(101).then(result => console.log(result));
// Output after 1.5s: Success: dev_ninja logged in as Admin.
