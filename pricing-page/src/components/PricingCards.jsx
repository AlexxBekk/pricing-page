import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function PricingCards() {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      priceSuffix: '/mo',
      features: [
        '10 users included 2 GB of storage',
        'Email support',
        'Help center access',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outline-primary',
      headerClass: '',
    },
    {
      title: 'Pro',
      price: '$15',
      priceSuffix: '/mo',
      features: [
        '20 users included 10 GB of storage',
        'Priority email support',
        'Help center access',
      ],
      buttonText: 'Get started',
      buttonVariant: 'primary',
      headerClass: '',
    },
    {
      title: 'Enterprise',
      price: '$29',
      priceSuffix: '/mo',
      features: [
        '30 users included 15 GB of storage',
        'Phone and email support',
        'Help center access',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'primary',
      headerClass: 'bg-primary text-white',
    },
  ]

  return (
    <Container className='mb-5'>
      <Row className='g-4 justify-content-center'>
        {plans.map((plan, index) => (
          <Col md={4} key={index}>
            <Card className='h-100 p-0'>
              <Card.Header className={`text-center w-100 ${plan.headerClass}`}>
                {plan.title}
              </Card.Header>
              <Card.Body className='d-flex flex-column text-center'>
                <Card.Title className='fs-2 text-center overflow-hidden mb-3'>
                  {plan.price}
                  <span className='text-secondary'>{plan.priceSuffix}</span>
                </Card.Title>
                <ul className='list-group mb-5'>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className='list-group-item list-group-item bg-transparent border-0 p-0'
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.buttonVariant}>{plan.buttonText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PricingCards
