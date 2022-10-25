import React from "react";
import { Link } from "react-router-dom";
//-------------------------
import Helmet from "../components/helmet/Helmet";
import HeroSlider from "../components/hero-slider/HeroSlider";
import PolicyCard from "../components/policy/PolicyCard";
import ProductCard from "../components/productcard/ProductCard";
import Grid from "../components/grid/Grid";
import Section, {
  SectionTitle,
  SectionBody,
} from "../components/section/Section";
//-------------------------
import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../data/products";

const Home = () => {
  return (
    <Helmet title='Home'>
      {/* hero slide */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/* end hero slide */}

      {/* policy */}

      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <PolicyCard
                key={index}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* end policy */}

      {/* best selling section */}
      <Section>
        <SectionTitle>Top sách bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={5} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(5).map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                name={item.name}
                price={Number(item.price)}
                // slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
        <SectionTitle>Sách mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}></Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section></Section>
      {/* end banner */}

      {/* popular product section */}
      <Section>
        <SectionTitle>Phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}></Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;