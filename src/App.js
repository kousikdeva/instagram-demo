import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PhotoGrid from "./components/PhotoGrid";
import UserInfoSection from "./components/UserInfoSection";

function App() {
  const [userInfo, setUserInfo] = useState({})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const callBack = async () => {
      const userData = await axios.get('http://jsonplaceholder.typicode.com/users/1')
      const userPosts = await axios.get('http://jsonplaceholder.typicode.com/photos')
      setUserInfo(userData.data)
      setPosts(userPosts.data.splice(0, 99))
    }
    callBack()
  }, [])

  return (
    <Container maxWidth='lg' >
      <UserInfoSection userInfo={userInfo} />
      <PhotoGrid posts={posts} />
    </Container>
  );
}

export default App;
