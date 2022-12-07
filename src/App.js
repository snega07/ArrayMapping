import "./styles.css";

export default function App() {
  const list = ["mars", "venus", "jupiter", "earth", "saturn", "neptune"];
  const renderlist = list.map((item) => (
    <table>
      <tr>
        <td>{item}</td>
      </tr>
    </table>
  ));
  return <div className="App">{renderlist}</div>;
}
