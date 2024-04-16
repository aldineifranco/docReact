import { ProfileProps } from "../../interface/ProfileProps";
import { Profile } from "../Profile";
import { Content } from "./style";

export function ProfileList() {
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
    }
  ]

  // const count = userProfile.length;
  
  // if (count > 0) {
  //   const numero = count > 1 ? 'Vídeos' : 'Vídeo';
  //   const contador = count + ' ' + numero
  // }
   
  

  return (
   
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
 
  )
}
