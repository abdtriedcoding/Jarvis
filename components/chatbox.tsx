import { Button } from "./ui/button"
import { Input } from "./ui/input"

const ChatBox = () => {
  return (
    <div className="flex space-x-2">
      <Input type="text" placeholder="Message chatGPT" />
      <Button variant={"outline"}>Send</Button>
    </div>
  )
}

export default ChatBox