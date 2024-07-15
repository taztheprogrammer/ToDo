import image1 from './assets/Vector.png'

export default function Jar() {
    return <div style={{position: 'relative', height: '275px', width: '200px'}}>
    <img src={image1} style={{ width: '100%', height: 'auto' }}></img>    
    <div style={{position: 'absolute', bottom: '22px', left: '22px', width: '155px', height: '138px'}}>df</div>
    </div>
}