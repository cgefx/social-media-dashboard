import styled from 'styled-components';

const Heading = styled.h1`
	font-size: 2.2rem;
	margin-bottom: 1rem;
	text-align: ${({ centered }) => (centered ? 'center' : 'initial')};

	@media (min-width: 900px) {
		font-size: 3.2rem;
	}
`;

// const FollowCount = styled.h1`
// 	font-size: 5.6rem;
// 	font-weight: bold;
// 	text-align: center;
// 	margin-top: 2.4rem;
// `;

export default Heading;
