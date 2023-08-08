import Wel from "./components/welcome.js";
import "app/globals.css"

export default function App() {
  return (
    <div className="text-white text-9xl">
      <div style={{ fontFamily:"font" }}>
        <h1 className="text-center text-black text-6xl ">청강학원</h1>
      </div>
      <Wel />
      <div style={{height:0, paddingBottom:100}} />
    </div>
  );
}
