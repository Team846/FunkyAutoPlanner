import { Dispatch, SetStateAction } from 'react'
import "./ModifiedInput.css"
interface ModInterface {
    unit: string;
    setField: Dispatch<SetStateAction<any>>;
    field: any;
}

export default function ModifiedInputField({ unit, setField, field}: ModInterface) {
    return (
        <div style={{borderWidth: "2px", marginRight: '10px', borderRadius: '9999px', borderColor: 'white', display: 'flex', flexDirection: 'row'}}>
            <input className="mod-input" onChange={e => setField(e.target.value)} value={field} /> 
            <span>{unit}</span>
        </div>
    )
}