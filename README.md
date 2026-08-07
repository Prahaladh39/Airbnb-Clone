### Updated Functionality
The codebase now features an asynchronous function to fetch user profiles.

### Key Components
* The `fetchUserProfile` function takes a `userId` as input and simulates a network request to retrieve the user's profile.
* The function returns a success message with the user's username and role, or an error message if the request fails.

### Example Usage
```javascript
fetchUserProfile(101).then(result => console.log(result));
```
This will output: `Success: dev_ninja logged in as Admin.` after a 1.5-second delay.