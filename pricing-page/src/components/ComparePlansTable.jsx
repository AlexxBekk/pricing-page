import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table'

function ComparePlansTable() {
  const plans = [
    {
      featureTitle: 'Public',
      freePlanValue: '✓',
      proPlanValue: '✓',
      enterprisePlanValue: '✓',
      border: '',
    },
    {
      featureTitle: 'Private',
      freePlanValue: '',
      proPlanValue: '✓',
      enterprisePlanValue: '✓',
      border: 'border-bottom border-secondary',
    },
    {
      featureTitle: 'Permissions',
      freePlanValue: '✓',
      proPlanValue: '✓',
      enterprisePlanValue: '✓',
      border: '',
    },
    {
      featureTitle: 'Sharing',
      freePlanValue: '',
      proPlanValue: '✓',
      enterprisePlanValue: '✓',
      border: '',
    },
    {
      featureTitle: 'Unlimited members',
      freePlanValue: '',
      proPlanValue: '✓',
      enterprisePlanValue: '✓',
      border: '',
    },
    {
      featureTitle: 'Extra security',
      freePlanValue: '',
      proPlanValue: '',
      enterprisePlanValue: '✓',
      border: '',
    },
  ]

  return (
    <Container>
      <h2 className='mb-4 text-center overflow-hidden'>Compare plans</h2>
      <Table
        className='custom-table'
        responsive
        style={{ tableLayout: 'fixed' }}
      >
        <thead className='border-bottom border-secondary'>
          <tr>
            <th></th>
            <th>Free</th>
            <th>Pro</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index} className={plan.border}>
              <th className='text-start'>{plan.featureTitle}</th>
              <td>{plan.freePlanValue}</td>
              <td>{plan.proPlanValue}</td>
              <td>{plan.enterprisePlanValue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default ComparePlansTable
