import { useState, useEffect } from 'react'


export default function DarkModeToggle() {

    // State to hold the current mode, defaulting to 'light' if not set in localStorage   
    const [mode, setMode] = useState(
        localStorage.getItem('mode') || 'light'
    )

// Effect to apply the mode to the document body and save it to localStorage whenever it changes
    useEffect(() => {
        document.body.setAttribute("mode", mode)
        localStorage.setItem('mode', mode)
    }, [mode])

    function toggleMode() {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    return (
        <button className='dark-mode-toggle' onClick={toggleMode} />
    )
}
