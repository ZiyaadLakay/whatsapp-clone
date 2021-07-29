import { Avatar } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Avatar />

        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last Seen ...</p>
        </HeaderInformation>
      </Header>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div``;

const HeaderInformation = styled.div``;
