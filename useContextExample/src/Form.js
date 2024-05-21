import Panel from "./Panel";
import Button from "./Button";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Form = () => {
    const backgroundColorContext = useContext(ThemeContext);
    return (
        <>
        <Panel title="Welcome">
            <Button> Sign up </Button>
            <Button> Log in </Button>
            <br/>
            <label>
                <input
                    type="checkbox"
                    checked={backgroundColorContext.backgroundColor === 'grey'}
                    onChange={(e) => {
                        backgroundColorContext.setBackgroundColor(e.target.checked ? 'grey' : 'white')
                    }}
                />
                Use dark mode
            </label>
        </Panel>
           
        </>

    )
}
export default Form;