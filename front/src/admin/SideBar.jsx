import { Link } from "react-router-dom";
import "./style-admin.css";

export default function SideBar() {
	return (
		<>
			{/*     SIDE AREA */}
			<div className="sideArea">
				<div className="avatar">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNOdyoIXDDBztO_GC8MFLmG_p6lZ2lTDh1ZnxSDawl1TZY_Zw"
						alt="avatar"
					/>
					<div className="avatarName">
						Welcome,
						<br />
						SKS Energy
					</div>
				</div>
				<ul className="sideMenu">
					<li>
						<Link to="/admin/products" className="has-submenu">
							<span className="fa fa-table" />
							PRODUCT
						</Link>
					</li>
					<li>
						<Link to="/admin/news">
							<span className="fa fa-sitemap" />
							News List
						</Link>
					</li>
					<li>
						<Link to="/admin/contact">
							<span className="fa fa-envelope-o" />
							Contact
						</Link>
					</li>
				</ul>
			</div>
			{/*     SIDE AREA */}
		</>
	);
}
