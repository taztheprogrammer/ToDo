export default function Popup() {
    return <div style={{
        border: '1px solid black', 
        width: '500px', height: '200px', 
        position: 'absolute', 
        zIndex: '20',
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }}></div>
}