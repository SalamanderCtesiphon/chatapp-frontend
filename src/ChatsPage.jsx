import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID, props.user.username, props.user.secret)

  return (
    <div style={{ height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
      {/* <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      /> */}
    </div>
  );
};

export default ChatsPage;