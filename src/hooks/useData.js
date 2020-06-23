import { useState, useEffect } from 'react';
import followers from '../api/followData';
import overview from '../api/overviewData';

function useData() {
	const [overviewData, setOverviewData] = useState([]);
	const [followerData, setFollowerData] = useState([]);
	const [totalFollowers, setTotalFollowers] = useState(null);

	function calculateTotalFollowers(array) {
		return array.reduce((sum, { count }) => sum + count, 0).toLocaleString();
	}

	useEffect(() => {
		setOverviewData(overview);
		setFollowerData(followers);
	}, []);

	useEffect(() => {
		setTotalFollowers(calculateTotalFollowers(followerData));
	}, [followerData]);

	return { overviewData, followerData, totalFollowers };
}

export default useData;
