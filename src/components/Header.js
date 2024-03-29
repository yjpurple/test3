import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<>
			<h1>TEST3</h1>
			<ul>
				<Link to="/profile/1"><li>1번 Profile</li></Link>
				<Link to="/product/1"><li>product 1번 상품</li></Link>
				<Link to="/accordion/1"><li>Accordion 1번 상품</li></Link>
				<Link to="/sign/1"><li>로그인 하기</li></Link>
			</ul>
		</>
	);
}

export default Header;