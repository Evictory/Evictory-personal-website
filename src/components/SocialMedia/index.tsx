import React from 'react';
import { List } from './styles';
import { ReactComponent as SkypeIcon } from '../../assets/skype.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-brands.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin-brands.svg';


const SocialMedias: React.FC = () => {
  const medias = [
    <GithubIcon title="GitHub" href="https://github.com/Evictory"/>,
    <LinkedinIcon title="Linkedin" href="https://www.linkedin.com/in/emerson-vitorio-de-oliveira-237649bb/"/>,
    <SkypeIcon title="emerson_vitorio"/>,
  ]

  return (
    <>
      <List>
        {medias.map(media => 
          <>
            <a href={ media.props.href }>
              <li>
              { media }
              </li>
              <small>
              { media.props.title }
              </small>  
            </a>
          </>
        )}
      </List>
    </>
  );
}

export default SocialMedias;
