import Header from "./components/Header";
import ListItems from "./components/ListItems";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ListItems />
        <Form />
      </div>
      <Footer />
    </div>
  );
}
