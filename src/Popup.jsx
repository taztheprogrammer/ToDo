export default function Popup() {
    return <>
    <div style={{
         position: 'fixed',
         top: '0',
         left: '0',
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         zIndex: '9'
    }}></div>

    <div style={{
        border: '1px solid black', 
        width: '500px', height: '200px', 
        position: 'absolute', 
        zIndex: '20',
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }}></div>
    </>
}