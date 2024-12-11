import "./App.css";
import { Route, Routes } from "react-router-dom";
import Template from "./components/Template";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import News from "./components/News";
import Login from "./components/Login";
import Application from "./components/Application";

import NewsDetails from "./components/NewsDetails";
import ProduitDetails from "./components/ProduitDetails";
import ProductList from "./admin/ProductList";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import NewsList from "./admin/NewsList";
import AddNews from "./admin/AddNews";
import EditNews from "./admin/EditNews";
import BoiteContact from "./admin/BoiteContact";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Template />} />
				<Route path="/login" element={<Login />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<ProduitDetails />} />
				<Route path="/news" element={<News />} />
				<Route path="/news/:id" element={<NewsDetails />} />

				<Route path="/application" element={<Application />} />

				<Route path="/admin/products" element={<ProductList />} />
				<Route path="/admin/addProduct" element={<AddProduct />} />
				<Route path="/admin/editProduct/:id" element={<EditProduct />} />

				<Route path="/admin/news" element={<NewsList />} />
				<Route path="/admin/editNews/:id" element={<EditNews />} />
				<Route path="/admin/addNews" element={<AddNews />} />

				<Route path="/admin/contact" element={<BoiteContact />} />
			</Routes>
		</>
	);
}

export default App;
