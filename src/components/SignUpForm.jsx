import { useState } from 'react';


export default function SignUpForm({ setToken }) {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: 'POST',
                body: JSON.stringify({userName, password }),
            });
            const json = await res.json();
            console.log(json);
            setToken(json.token);
            setUserName("");
            setPassword("");
        } 
        catch (error) {
            setError(error.message);
        }
    }

    return (<>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label> 
                <input placeholder='UserName' type="text" name='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label> 
                <input placeholder='Password' type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>            
            <button type='submit'>Submit</button>
        </form>
    </>);  
}