import { useContext } from "react";
import ThemeContext from "./ThemeContext"

const Panel = ({ title, children }) => {
    const backgroundColorContext = useContext(ThemeContext);
    return (
        <section style={{ backgroundColor: backgroundColorContext.backgroundColor }}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

export default Panel;