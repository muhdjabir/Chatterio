const API_URL = "/api/auth/";

const signup = async (email: String, username: String, password: String) => {

    const response = await fetch(`${process.env.REACT_APP_DB_URL}${API_URL}/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, username, password})
    });
    const json = await response.json();
    if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json));
    } else {
        console.log("Failed");
    }
}



export default signup;