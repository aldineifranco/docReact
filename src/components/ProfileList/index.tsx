import { useEffect, useState } from "react";
import { ProfileProps } from "../../interface/ProfileProps";
import { Profile } from "../Profile";
import { Heading, Content, InputFilter } from "./style";

export function ProfileList() {
  const [countVideo, setCountVideo] = useState<string>(' ');

  const userProfile: ProfileProps[] = [
    {
      id: 1,
      name: 'Aldinei Souza Franco',
      url: 'https://avatars.githubusercontent.com/u/93042673?v=4',
      imageSize: 90
    },
    {
      id: 2,
      name: 'Davi Franco',
      url: 'https://avatars.githubusercontent.com/u/93042673?v=4',
      imageSize: 90
    },
    {
      id: 3,
      name: 'Nathan Franco',
      url: 'https://avatars.githubusercontent.com/u/93042673?v=4',
      imageSize: 90
    },
    {
      id: 4,
      name: 'José Souza',
      url: 'https://avatars.githubusercontent.com/u/93042673?v=4',
      imageSize: 90
    },
  ];

  useEffect(() => {
    textCountVideo();
  }, [userProfile]);
  

  function textCountVideo() {
    const count = userProfile.length;
    if (count > 0) {
      const textHeading = count > 1 ? 'Vídeos' : 'Vídeo'
      const text = count + ' ' + textHeading
      setCountVideo(text)
    }
  }



  return (
    <>
      <Heading>{countVideo}</Heading>

      <InputFilter></InputFilter>

      <Content>
        {userProfile.map(user => (
          <Profile
            id={user.id}
            name={user.name}
            url={user.url}
            imageSize={user.imageSize}
          />
        ))}

      </Content>
    </>
  )
}
