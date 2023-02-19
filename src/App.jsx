import { useState } from "react"
import { GameContext } from "./context.js"
import { Map } from "./Map.jsx"
import names from "./names.json"

export const App = () => {
    const [completedCountries, setCompletedCountries] = useState([])

    const onInput = e => {
        const value = e.target.value.toLowerCase().trim()
        const code = names[value]
        if (code && !completedCountries.includes(code)) {
            setCompletedCountries([...completedCountries, code])
            e.target.value = ""
        }
    }

    const [timeRemaining, setTimeRemaining] = useState(15 * 60)

    return (
        <GameContext.Provider value={{ completedCountries }}>
            <div className="max-w-7xl mx-auto text-4xl px-8">
                <div className="flex flex-grow justify-between mt-12 mb-4">
                    <p className="w-48 text-neutral-400">{formatTime(timeRemaining)}</p>

                    <input
                        autoFocus={true}
                        className="bg-transparent outline-none text-white text-center placeholder-neutral-600"
                        onInput={onInput}
                        placeholder="Type here"
                    />

                    <p className="w-48 text-neutral-400 text-right"><span className="text-white">{completedCountries.length}</span> / 197</p>
                </div>

                <Map />
            </div>
        </GameContext.Provider>
    )
}

const formatTime = t => {
    const minutes = (Math.floor(t / 60)).toString().padStart(2, "0")
    const seconds = (t - minutes * 60).toString().padStart(2, "0")
    return `${minutes}:${seconds}`
}