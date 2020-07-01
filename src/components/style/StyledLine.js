import styled from 'styled-components'

const StyledLine = styled.hr`
  border: 0;
  margin-top: 2.4rem;
  border-top: 1px solid ${({ theme }) => theme.textSecondary};
  @media (min-width: 900px) {
    display: none;
    opacity: 0;
  }
`

export default StyledLine
