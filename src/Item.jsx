import xButton from './assets/X.png'
import checkButton from './assets/Check.png'
import Button from './Button.jsx'

export default function Item() {
    return <div className='Item' style={{ width: '553px', height: '116px', backgroundColor: '#FFFFFF', borderRadius: '5px'}}>
        <Button image={checkButton}></Button>
        <Button image={xButton}></Button>
    </div>
}