import Item from './Item.jsx'
import plus from './assets/Add.png'
import Button from './Button.jsx'

export default function ItemBoard() {
    return <div id='ItemBoard' style={{width: '602px', height: '778px', backgroundColor: '#E9E9E9', borderRadius: '15px'}}>
        <Item></Item>
        <Button image={plus}></Button>
    </div>
}