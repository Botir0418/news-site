import { NewsContextProvider } from "../NewsContext";
import News from "../components/News";
import "../App.css";

function GetNews() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default GetNews;