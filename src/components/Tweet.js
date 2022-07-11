import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';


function Tweet({tweet}) {
  let {
    user: { name, image,handle },
    timestamp,
    message

  } = tweet;
  
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User userData={tweet.user} />
          <Timestamp timestamp={timestamp} />
        
        </div>

        <Message message={message} />
        <Actions/>

        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
