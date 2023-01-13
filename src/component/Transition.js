import Item from "./Item";
import './transition.css';
const Transition = (props) => {
    const { items } = props
    return (
        <div>
            <ul className="item-list">
                {items.map((e) => {
                    // uuidv4 ช่วยสร้าง id ที่ไม่ซ้ำ
                    return <Item {...e} key={e.id} />
                })}
            </ul>
        </div>
    )
}

export default Transition;