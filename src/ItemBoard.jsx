import Item from './Item.jsx'
import plus from './assets/Add.png'
import Button from './Button.jsx'
import './ItemBoard.css'

export default function ItemBoard() {
    return <div id='ItemBoard' style={{width: '602px', height: '778px', backgroundColor: '#E9E9E9', borderRadius: '15px'}}>    
        <div id="itemContainer">
        <Item content={'hi asdfd'}></Item>
        </div>
        <Button text="+"></Button>
    </div>
}