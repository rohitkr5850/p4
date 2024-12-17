const deleteUser = (key) => {
    fetch(`https://your-project-id.firebaseio.com/users/${key}.json`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log("User deleted successfully");
          document.getElementById(key).remove();
        } else {
          throw new Error("Failed to delete user");
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };
  