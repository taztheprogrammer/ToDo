import xButton from './assets/X.png'
import checkButton from './assets/Check.png'
import Button from './Button.jsx'

export default function Item({content}) {
    return <div className='Item' style={{ width: '553px', height: '116px', backgroundColor: '#FFFFFF', borderRadius: '5px'}}>
        <Button text='c'></Button>
        <Button text='d'></Button>
        <p>{content}</p>
    </div>
}