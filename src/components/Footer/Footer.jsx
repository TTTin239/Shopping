import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top'>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div> */}
      {/* </section>  */}

      <section className='border-top' style={{background: 'linear-gradient(53deg, rgba(2,0,36,1) 10%, rgba(89,226,254,1) 69%), rgba(155,157,195,1) 38%'}}>
        <MDBContainer className='text-center text-md-start mt-5' style={{color: 'white'}}>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="shopping-bag" className="me-3" />
                GUCCI
              </h6>
              <p style={{color: 'white'}}>
              Gucci is part of the Kering Group. A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion,
              Leather Goods, Jewellery and Watches.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>THE COMPANY</h6>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  About Gucci
                </a>
              </p>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  Gucci Equilibrium
                </a>
              </p>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  Privacy & Cookies
                </a>
              </p>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  Corporate Information
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>NEED HELP?</h6>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  Returns & Exchanges
                </a>
              </p>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  FAQs
                </a>
              </p>
              <p style={{color: 'white'}}>
                <a href='#!' className='text-reset'>
                  Shipping Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p style={{color: 'white'}}>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p style={{color: 'white'}}>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p style={{color: 'white'}}>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p style={{color: 'white'}}>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ background: 'linear-gradient(53deg, rgba(2,0,36,1) 10%, rgba(89,226,254,1) 69%), rgba(155,157,195,1) 38%', color: 'white' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://www.gucci.com/us/en/'>
          &nbsp;gucci.com
        </a>
      </div>
    </MDBFooter>
  );
};