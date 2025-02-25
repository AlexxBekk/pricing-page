import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  const footerNav = [
    {
      sectionTitle: 'Features',
      features: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Stuff for developers',
        'Another one',
        'Last time',
      ],
    },
    {
      sectionTitle: 'Resourses',
      features: [
        'Resource',
        'Resource name',
        'Another resource',
        'Final resource',
      ],
    },
    {
      sectionTitle: 'About',
      features: ['Team', 'Locations', 'Privacy', 'Terms'],
    },
  ]

  return (
    <footer className='py-4'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs={12} md={true}>
            <img
              src='https://getbootstrap.su/docs/5.1/assets/brand/bootstrap-logo.svg'
              width='24'
              height='19'
              className='float-start me-3'
            />
            <p className='text-start'>© 2017–2021</p>
          </Col>

          {footerNav.map((section, index) => (
            <Col xs={12} md={true} key={index}>
              <h5 className='text-start overflow-hidden'>
                {section.sectionTitle}
              </h5>
              <ul className='text-start p-0'>
                {section.features.map((feature, i) => (
                  <li key={i}>
                    <a className='link-secondary link-underline link-underline-opacity-0 text-muted'>
                      {feature}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
