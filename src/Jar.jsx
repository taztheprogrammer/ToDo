import image1 from './assets/Vector.png'
import './Jar.css'

export default function Jar() {
    const numberOfBlocks = 1;
    const blocks = Array.from({length: numberOfBlocks}, (_, index) => (
        <div key={index} className='blocks'></div>
    ))

    return <div id='Jar'>
    <img id='JarImage' src={image1}></img>    
    <div id="Grid"> {blocks} </div>
    </div>

}