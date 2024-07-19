export default function Button({image, onClick}) {
    return <button onClick={onClick} style={{backgroundImage: `url(${image})`,backgroundSize: 'cover',
    backgroundPosition: 'center', height: '50px', width: '50px', border: 'none'}}></button>
}