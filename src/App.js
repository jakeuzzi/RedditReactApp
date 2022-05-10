import TextCardCollection from './components/TextCardCollection';
import {useState} from "react";
import axios from "axios";
import useFetch from "./hooks/useFetch.js";
import PopupPostDetails from './components/PopupPostDetails';

function App() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [popupDetails, setPopupDetails] = useState({
    postTitle: "title",
    topComment: "top comment",
    postID: 0,
    postURL: "#"
  });

  const { response, error, loading } = useFetch(
    "https://www.reddit.com/r/nfl.json",
    {
      query: { limit: 20, }
    }
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <div className="App">
      <header className="App-header">r/NFL Front Page</header>
      <div>
        <PopupPostDetails open={open} closeModal={closeModal} postDetails={popupDetails} />
      </div>
      <TextCardCollection 
        modalOptions={{
          openStatus : open,
          openModal: setOpen,
          closeModal: closeModal,
          setPostDetails: setPopupDetails
        }} 
        redditPostData={response.data.children} 
      />
    </div>
  );
}

export default App;
