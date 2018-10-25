import styled from 'styled-components'
import { elevation1 } from '../../styles/elevation'

export const TextContent = styled.div`
  margin: auto;
  max-width: 600px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  p {
    padding: 10px;
    margin: auto;
  }
  box-shadow: ${elevation1};
`

export const Wrapper = styled.div`
  padding: 40px;
`
