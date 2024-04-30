import { useEffect, useState } from "react";
import { ProfileProps } from "../../interface/ProfileProps";
import { Profile } from "../../components/Profile";
import { Heading, Content, InputFilter, Container } from "./style";
import { Search } from 'lucide-react';
import ImageCard from '../../assets/card_image.jpg';

const userProfile: ProfileProps[] = [
  {
    id: 1,
    title: 'Aldinei Souza Franco',
    url: ImageCard,
  },
  {
    id: 2,
    title: 'Davi Franco',
    url: ImageCard,
  },
  {
    id: 3,
    title: 'Nathan Franco',
    url: ImageCard,
  },
  {
    id: 4,
    title: 'José Souza',
    url: ImageCard,
  },
  {
    id: 5,
    title: 'José Souza',
    url: ImageCard,
  },
];

export function ProfileList() {
  const [countVideo, setCountVideo] = useState<string>(' ');
  const [handleTextChange, setHandleTextChange] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<ProfileProps[]>(userProfile)


  useEffect(() => {
    function textCountVideo() {
      const count = filteredUsers.length;
      if (count > 0) {
        const textHeading = count > 1 ? 'vídeos' : 'vídeo'
        const text = count + ' ' + textHeading
        setCountVideo(text)
      }
    }
    textCountVideo()
  }, [filteredUsers]);


  function handleText(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setHandleTextChange(value)
    const filtered = userProfile.filter(user => user.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredUsers(filtered)
  }

    return (
      <Container>


        <InputFilter>
          <input
            value={handleTextChange}
            type="text"
            onChange={handleText}
            placeholder="Digite um termo para busca"
          />
          <button type="submit">
            <Search />
          </button>
        </InputFilter>

        <Heading>{countVideo} encontrados</Heading>
        <Content>
          {filteredUsers.map(user => (
            <Profile
              id={user.id}
              title={user.title}
              url={user.url}
            />
          ))}

        </Content>
      </Container>
    )
  }

