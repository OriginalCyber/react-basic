import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./formComponent.css";

const FormComponent = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (e) => {
        setTitle(e.target.value)
    }

    const inputAmount = (e) => {
        setAmount(e.target.value)
    }

    const saveItem = (e) => {
        e.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount),
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
        // console.log("บันทึกข้อมูลเรียบร้อย")
    }


    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0
        setFormValid(checkData)
    }, [title, amount])
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-group">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-group">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>

    )
}

export default FormComponent