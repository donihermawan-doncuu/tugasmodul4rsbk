import React, { useState, useEffect, useRef } from "react";
import "./Name.css";

export default function Name() {
    const [name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <>
        <div className="Main">
        <p className="Text">Kelompok 27</p>
            <input placeholder="Tulis disini" type="Text" value={name} onChange={e => setName(e.target.value)} />
            <p className="Text"> Nama Saya Adalah {name} </p>
            <p>This page rendered {renderCount.current} times</p>
            </div>
        </>
    )
}