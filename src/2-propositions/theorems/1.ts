import * as B from 'basic'
import * as Pr from '..'
import {H1, H2, MP} from '../axioms'

type P = B._Proposition

bi (`>>`, Pr.implies)

const NAME = `x >> x`

const WTS = (x: P): P => x >> x

const proof = () => {
  const h1_1 = (x: P) => H1 (x, x >> x)
  const h2_1 = (x: P) => H2 (x, x >> x, x)
  const mp_1 = MP ({implication: h2_1, proposition: h1_1})
  const h1_2 = (x: P) => H1 (x, x)
  const mp_2 = MP ({implication: mp_1, proposition: h1_2})
  return mp_2
}

export default B.theorem (NAME, WTS, proof)