import { Dispatch, SetStateAction } from 'react'

interface ModInterface {
    unit: string;
    setField: Dispatch<SetStateAction<any>>;
    field: any;
}

export default function ModifiedInputField({ unit, setField, field}: ModInterface) {
    return (
        <div style={{border: "2px", borderRadius: '9999px', borderColor: 'white', display: 'flex', flexDirection: 'row'}}>
            <input onChange={e => setField(e.target.value)} value={field} /> <span>{unit}</span>
        </div>
    )
}