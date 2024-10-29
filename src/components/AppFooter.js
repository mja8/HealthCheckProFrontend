import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span>HealthCheckPro</span>
      </div>
      <div className="ms-auto">
        <span>Made by HealthCheckPro Team C</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
