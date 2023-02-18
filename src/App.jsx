import { useState } from "react"
import { GameContext } from "./context.js"
import { Map } from "./Map.jsx"
import names from "./names.json"

export const App = () => {
    const [completedCountries, setCompletedCountries] = useState([])

    return (
        <GameContext.Provider value={{ completedCountries }}>
            <Map />

            <input onInput={e => {
                const value = e.target.value.toLowerCase().trim()
                const code = names[value]
                if (code && !completedCountries.includes(code)) {
                    setCompletedCountries([...completedCountries, code])
                    e.target.value = ""
                    return false
                }
            }} />

            <p className="text-white">{completedCountries.length} / 197</p>
        </GameContext.Provider>
    )
}