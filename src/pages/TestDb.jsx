import React from 'react'
import { dbExample } from '../testdata'
import M from '../components/test/M'

export default function TestDb() {

  return (
    <div>
        {dbExample.map(movie => <M movie={movie} />)}
    </div>
  )
}
