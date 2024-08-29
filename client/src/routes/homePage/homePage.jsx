import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Footer from "../../components/footer/Footer";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="pageWrapper">
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <SearchBar />
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Welcome to 2MJ, where finding your ideal home is simple and stress-free. Whether you're looking to rent or buy,
              our extensive listings feature a wide range of properties to suit your needs and budget. Browse through high-quality
              photos, detailed descriptions, and virtual tours to find the perfect place to call home. With our expert guidance
              and user-friendly search tools, your next move starts here.
            </p>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
