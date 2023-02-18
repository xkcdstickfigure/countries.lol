import { GameContext } from "./context.js"
import { Map } from "./Map.jsx"

export const App = () => (
    <GameContext.Provider value={{
        completedCountries: ["US", "RU", "CN", "CD", "FR"]
    }}>
        <Map />
    </GameContext.Provider>
)