import Heading from './Heading'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div style={{ 
            minHeight: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <div style={{ 
            textAlign: "center"
        }}>
            <Heading headline="404 Opps! Page Not Found." />
            <Link to="/" >Return to Home</Link>
        </div>
    </div>
  )
}
