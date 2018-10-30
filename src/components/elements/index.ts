import styled from 'styled-components'
import { gray1 } from '../../styles/colors'
import { elevation1 } from '../../styles/elevation'

interface TextContentProps {
  margin?: string
  maxWidth?: number
  padding?: string
}

export const TextContent = styled.div`
  margin: ${(props: TextContentProps) => props.margin || 'auto'};
  max-width: ${(props: TextContentProps) => props.maxWidth || 600}px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid ${gray1};
  padding: ${(props: TextContentProps) => props.padding || '30px'};

  p {
    padding: 10px 0;
    margin: auto;
  }
  box-shadow: ${elevation1};
`
