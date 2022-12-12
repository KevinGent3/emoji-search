import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import emojis from "./assets/emojis.json";
import Line from "./components/Line";

function App() {
  const [search, setSearch] = useState("");
  const tab = [];
  for (let i = 0; i < emojis.length; i++) {
    if (emojis[i].keywords.includes(search)) {
      if (tab.length < 20) {
        tab.push(<Line emoji={emojis[i]}></Line>);
      }
    }
  }
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}></Search>
      {tab}
    </div>
  );
}

export default App;
