import { useState } from 'react'
import './Card.css'

export const Card = ({
    item, handleFocusout, handleCheckedChange
}) => {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState(item.done)
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChecked = (e) => {
        setStatus(e.target.checked)
        handleCheckedChange(item.id, e.target.checked)
    }
    return (
        <div className="card" key={item.id}>
            {
                item.title ? (
                    <label className="card-label" data-status={status}>
                        <input type="checkbox" id={item.id} checked={status} onChange={handleChecked} />
                        <span>{item.title}</span>
                    </label>
                ) : (
                    <label className="card-label">
                        <input autoFocus value={title} onBlur={handleFocusout} onChange={handleChangeTitle} type="text" name="" id={item.id} />
                    </label>
                )
            }
        </div>
    )
}