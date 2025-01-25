import { Dispatch, SetStateAction } from 'react'
import "./ModifiedInput.css"
interface ModInterface {
    unit: string;
    setField: Dispatch<SetStateAction<any>>;
    field: any;
}

export default function ModifiedInputField({ unit, setField, field}: ModInterface) {
    return (
        <div className="mod-ovr">
            <input className="mod-input" onChange={e => setField(e.target.value)} value={field} /> 
            <span className="span-label">{unit}</span>
        </div>
    )
}