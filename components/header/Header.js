import React from 'react';
 import styles from  '../../Styles/Header.module.css';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle, BiLogoTwitter } from 'react-icons/bi';
import { Col, Row } from 'react-bootstrap';
import Alert from "../../pages/components/Alert"
import Link from 'next/link';

const Header = () => {
  return (<>
    <Alert message={'Download Thooni app to change your design ideas into reality'} color={'#EDF8FF'}/>
    <div className={styles.wholecontainer}>
      <div className={styles.subcontainer}>
        <Row >
          <Col xs={6} md={8}>
            <Row>
              <Col xs={12} md={6} xl={3} lg={4}>
                <div className={styles.iconwithtext}>
                  <HiOutlinePhone color='white' size={18} />
                  <span className={styles.numberfont}>+91 73582 95552</span>
                </div>
              </Col>
              <Col xs={12} md={6} xl={3} lg={3}>
                <div className={styles.iconwithtext}>
                  <HiOutlineMail color='white' size={18} />
                  <span className={styles.numberfont}>team@thooni.com</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={4}>
             <div className={styles.textandicons}> 
              <span className={styles.numberfont}>Follow Us : </span> 
              <Link href='https://www.instagram.com/thooni.in/' target='_blank'>
               <AiOutlineInstagram color='white' size={18}/>
              </Link>
              <BiLogoFacebookCircle color='white' size={18}   className={styles['d-none']} />
              <BiLogoTwitter color='white' size={18}  className={styles['d-none']} />

            </div> 
          </Col>
        </Row>
      </div>

    </div>
  </>

  )
}

export default Header;