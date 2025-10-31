import { useNavigate } from "react-router-dom";
function Appbar(){
    const navigate = useNavigate();

    return (
            <div>
            <button onClick={() => {
                navigate('/')
            }}>Land</button>

            <button onClick={() => {
                navigate('/dashboard')
            }}>Dash</button>
        
        </div>
    )

}

export { Appbar }