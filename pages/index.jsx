/* eslint-disable @next/next/no-img-element */
import { withRouter } from "next/router";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ALink from "~/components/features/alink";
import HomeBanner from "~/components/Home/HomeBanner";
import HomeSlider from "~/components/Home/HomeSlider";
import { postNonAuth } from "~/helpers/backend_helper";
import { toaster } from "~/helpers/Custom/Toaster";
import { textToUrl } from "~/helpers/Custom/Url";
import { verionCode } from "~/version";

const Home = ({
  slider,
  featureProduct,
  error,
  subSlider,
  subSliderImage,
  router,
}) => {
  // const { data, error: slideError } = useSWR(
  //   ["/home-page-stl-carousel", {}],
  //   LoadDataWithBodyAsync
  // );
  useEffect(() => {
    window?.scrollTo({ top: 0 });
  }, []);
  // console.log(`Home ~ categoryData`, subSlider, subSliderImage);
  const { mainCategory, loading } = useSelector((store) => store.header);
  useEffect(() => {
    console.log(
      `%c ✅ Current Application Verison is: ${verionCode}`,
      "background: #222; color: #bada55; font-size: 30px"
    );
  }, []);

  const handleNavigation = (name) => {
    router.push(`/furniture/${name}`);
  };

  const services = [
    {
      heading: "Shop New In",
      imageUrl: "/images/home/services-card1.png",
      buttonTitle: "Shop Now",
      link: "/new-in",
    },
    {
      heading: "Trade Services",
      imageUrl: "/images/home/services-card2.png",
      buttonTitle: "Read More",
      link: "/trade-program",
    },
    {
      heading: "Interior Services",
      imageUrl: "/images/home/services-card3.png",
      buttonTitle: "Discover More",
      link: "/Interior",
    },
  ];

  useEffect(() => {
    if (error) {
      toaster("error", "Something went very wrong. please reload again");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const images = ['/images/home/watch-1.png', '/images/home/watch-2.png'];

  return (
    <div>
      {/* <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3345243,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
             r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      ></Script> */}
      <Container fluid className="p-0">
        <Row>
          {slider?.length > 0 ? <HomeSlider slider={slider || []} /> : null}
        </Row>
        <HomeBanner />
        {/* <Row
          className="m-0 py-4 pt-md-5"
          style={{ backgroundColor: "#F3F3F3" }}
        >
          <Col xs={12} className="text-center py-4">
            <p
              className="fw-light mb-0"
              style={{ fontSize: "24px", letterSpacing: "0.09em" }}
            >
              Highlights
            </p>
          </Col>
          <NewInSider data={featureProduct?.list || []} />
        </Row> */}

        <Row className="m-0 mb-3 mb-lg-5 p-0">
          <Col xs={12} className="my-4 my-lg-5 py-2 text-center">
            <h5
              className="fw-normal mb-0 d-none d-md-block"
              style={{ letterSpacing: "0.09em" }}
            >
              SHOP BY CATEGORY
            </h5>
            <h5 className="font_500 mb-0 d-block d-md-none">
              SHOP BY CATEGORY
            </h5>
          </Col>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            mainCategory?.map((el, index) => (
              <Col
                xs={12}
                md={6}
                lg={3}
                className="product-info px-2"
                key={index}
              >
                <ALink
                  href={`/${textToUrl(el?.title)}`}
                  className="shop-by-cat"
                >
                  <Card className="border-0 shop-by-style-card">
                    <img
                      className="shop-by-card-img"
                      src={
                        el?.image ||
                        "https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                      }
                      style={{ height: "500px" }}
                      alt=""
                    />
                    <div
                      className="text-center font_500 my-4 mx-auto px-auto"
                      style={{
                        letterSpacing: "0.09em",
                        fontSize: "20px",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      {el?.title}
                    </div>
                  </Card>
                </ALink>
              </Col>
            ))
          )}
        </Row>

        {/* Feature Image */}
        {/* <FeatureSlider
          subSlider={subSlider || []}
          subSliderImage={subSliderImage || []}
        /> */}

        <Row className="m-0">
          <Col xs={12} className="mt-4 mb-3 mt-lg-5 py-2">
            <h5
              className="font_500 mb-0 d-none d-md-block"
              style={{ letterSpacing: "0.09em" }}
            >
              SHOP BY ROOM
            </h5>
            <h5 className="font_500 mb-0 d-block d-md-none text-center">
              SHOP BY ROOM
            </h5>
          </Col>
          <Col
            xs={12}
            md={4}
            onClick={() => handleNavigation("living-room")}
            style={{ cursor: "pointer" }}
            className="out_stroke"
          >
            <Card className="border-0 shop-by-style-card">
              <Card.Img
                variant="top"
                src="/images/home/shopbyroomcard1.png"
                width="100%"
                style={{ height: "370px", objectFit: "cover" }}
              />
              <div
                className="text-center font_500 my-4 mx-auto px-auto"
                style={{
                  letterSpacing: "0.09em",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <a className="shop-by-cat">Living Room</a>
              </div>
            </Card>
          </Col>
          <Col
            xs={12}
            md={4}
            onClick={() => handleNavigation("home-office")}
            style={{ cursor: "pointer" }}
            className="out_stroke"
          >
            <Card className="border-0 shop-by-style-card">
              <Card.Img
                variant="top"
                src="/images/home/shopbyroomcard2.png"
                width="100%"
                style={{ height: "370px", objectFit: "cover" }}
              />
              <div
                className="text-center font_500 my-4 mx-auto px-auto"
                style={{
                  letterSpacing: "0.09em",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                <a className="shop-by-cat">Office</a>
              </div>
            </Card>
          </Col>
          <Col
            xs={12}
            md={4}
            onClick={() => handleNavigation("dining-room")}
            style={{ cursor: "pointer" }}
            className="out_stroke"
          >
            <Card className="border-0 shop-by-style-card">
              <Card.Img
                variant="top"
                src="/images/home/shopbyroomcard3.png"
                width="100%"
                style={{ height: "370px", objectFit: "cover" }}
              />
              <div
                className="text-center my-4 mx-auto px-auto"
                style={{
                  letterSpacing: "0.09em",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                <a className="shop-by-cat">Dining Room</a>
              </div>
              {/* <p
                className="text-center textBold"
                style={{
                  letterSpacing: '0.09em',
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  color: '#f5f5f5',
                  fontSize: 16,
                }}
              >
                Bedroom
              </p> */}
            </Card>
          </Col>
        </Row>

        {/* <div className="d-md-block m-0">
          <Col xs={12} className="my-4 my-lg-5 py-2">
            <ALink href="/shop-the-look">
              <h5
                className="font_500 mb-0 d-none d-md-block"
                style={{ letterSpacing: "0.09em" }}
              >
                SHOP THE LOOK
              </h5>
              <h5 className="font_500 mb-0 d-block d-md-none text-center">
                SHOP THE LOOK
              </h5>
            </ALink>
          </Col>
          {!data ? (
            <div className="text-center py-3">Loading...</div>
          ) : (
            <StopTheLook data={data?.list} />
          )}
        </div> */}

        <div className="deco_services text-center mt-2 mb-2">
          <h4 className="font_500 mb-0 d-none d-md-block">SERVICES</h4>
          <h4 className="font_500 mb-0 d-block d-md-none text-center">
            SERVICES
          </h4>
          <div className="deco_services_cards mt-3">
            {services &&
              services.map((item, index) => (
                <div key={index} className="deco_services_card_single">
                  <img src={item.imageUrl} alt="" />
                  <h5 className="textBold">{item.heading}</h5>
                  <hr
                    style={{
                      position: "absolute",
                      top: "60px",
                      left: "20px",
                      width: "70px",
                      height: "2px",
                      color: "white",
                      opacity: 0.8,
                    }}
                  />
                  <button
                    className="services-btn deco_services_button"
                    onClick={() => {
                      router.push(item?.link);
                    }}
                  >
                    <span className="float-start">{item.buttonTitle}</span>
                    <span className="float-end">
                      <Icon.ChevronRight
                        size={18}
                        className="me-2"
                        style={{ paddingBottom: "2px" }}
                      />
                    </span>
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* <div className="container-md mt-5 text-center">
          <h4 className="font_500 mb-0 d-none d-md-block">SERVICES</h4>
          <h4 className="font_500 mb-0 d-block d-md-none text-center">
            SERVICES
          </h4>
          <div className="row deco_px_5 mt-2 d-flex justify-content-center">
            {services &&
              services.map((service, idx) => (
                <div
                  className="col-md-4 my-2 d-flex justify-content-center"
                  key={idx}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={service.imageUrl}
                      className="deco_fluid"
                      alt="Services-Card"
                    />
                    <h5
                      className="textBold"
                      style={{
                        position: "absolute",
                        top: "55px",
                        left: "20px",
                        letterSpacing: "0.04em",
                        color: "#f5f5f5",
                        fontSize: "24px",
                      }}
                    >
                      {service.heading}
                    </h5>
                    <hr
                      style={{
                        position: "absolute",
                        top: "60px",
                        left: "20px",
                        width: "70px",
                        height: "2px",
                        color: "white",
                        opacity: 0.8,
                      }}
                    />
                    <button
                      className="services-btn"
                      style={{
                        letterSpacing: "0.09em",
                        width: "88%",
                        height: "55px",
                        borderRadius: "0",
                        position: "absolute",
                        bottom: "20px",
                        left: "20px",
                      }}
                      onClick={() => {
                        router.push(service?.link);
                      }}
                    >
                      <span className="float-start">{service.buttonTitle}</span>
                      <span className="float-end">
                        <Icon.ChevronRight
                          size={18}
                          className="me-2"
                          style={{ paddingBottom: "2px" }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div> */}

        {/* <Row className="m-0">
          <Col
            xs={12}
            className="my-4 my-lg-5 py-2 text-center"
            style={{ letterSpacing: "0.09em" }}
          >
            <h5 className="fw-normal mb-0 d-none d-md-block">SERVICES</h5>
            <h5 className="font_500 mb-0 d-block d-md-none text-center">
              SERVICES
            </h5>
          </Col>
          <Container>
            <Row className="justify-content-center mb-3 mb-lg-5">
              {services &&
                services?.map((el, index) => (
                  <Col xs={12} md={4} style={{ width: "380px" }} key={index}>
                    <Card
                      className="border-0 mx-auto services-card-img"
                      style={{ width: "max-content" }}
                    >
                      <img
                        src={el.imageUrl}
                        width="340px"
                        alt="Services-Card"
                      />
                      <h5
                        className="textBold"
                        style={{
                          position: "absolute",
                          top: "55px",
                          left: "20px",
                          letterSpacing: "0.04em",
                          color: "#f5f5f5",
                          fontSize: "24px",
                        }}
                      >
                        {el.heading}
                      </h5>
                      <hr
                        style={{
                          position: "absolute",
                          top: "60px",
                          left: "20px",
                          width: "70px",
                          height: "2px",
                          color: "white",
                          opacity: 0.8,
                        }}
                      />
                      <button
                        className="services-btn"
                        style={{
                          letterSpacing: "0.09em",
                          width: "88%",
                          height: "55px",
                          borderRadius: "0",
                          position: "absolute",
                          bottom: "20px",
                          left: "20px",
                        }}
                      >
                        <span className="float-start">{el.buttonTitle}</span>
                        <span className="float-end">
                          <Icon.ChevronRight
                            size={18}
                            className="me-2"
                            style={{ paddingBottom: "2px" }}
                          />
                        </span>
                      </button>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </Row> */}
      </Container>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  try {
    // const url = '/list-cat1';
    // const response = await postNonAuth(url);
    const url1 = "/list-home-sliders";
    const response1 = await postNonAuth(url1);
    const url2 = "/list-featured-products";
    const response2 = await postNonAuth(url2);
    // const url3 = "/list-subcat-sliders";
    // const response3 = await postNonAuth(url3);
    // const url4 = "/list-home-sub-sliders";
    // const response4 = await postNonAuth(url4);
    // console.log(`response`, response1);
    return {
      props: {
        // category: response?.data || [],
        slider: response1?.data || [],
        featureProduct: response2 || [],
        // subSlider: response3?.list || [],
        // subSliderImage: response4?.data || [],
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Failed to load data",
      },
    };
  }
};

export default withRouter(Home);

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     console.log('server>>>>>>>>');
//     store.dispatch(loadHeader());
//     // store.dispatch(loadSlider());
//     // store.dispatch(loadFeatureProduct());
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
//   }
// );