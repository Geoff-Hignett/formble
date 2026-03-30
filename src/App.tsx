import { Button } from "./components/ui/Button/Button";

function App() {
    return (
        <div className="p-4 flex gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button size="lg">Large</Button>
        </div>
    );
}

export default App;
