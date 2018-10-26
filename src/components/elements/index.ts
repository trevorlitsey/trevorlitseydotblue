import styled from 'styled-components'
import { gray1 } from '../../styles/colors'
import { elevation1 } from '../../styles/elevation'

export const TextContent = styled.div`
  margin: auto;
  max-width: 600px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid ${gray1};
  padding: 30px;
  p {
    padding: 10px 0;
    margin: auto;
  }
  box-shadow: ${elevation1};
`
