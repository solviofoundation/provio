import {H} from 'common'
import {H1, H2, MP} from '../axioms'
import {not, and} from '../helpers'
import {Theorem} from '../theorem'

un (`!`, not)
bi (`&`, and)

const

NAME = `Conjunction Introduction`,

WTS = (x, y) => x >> (y >> (x & y)),

proof = () => {}

const theorem = new Theorem (NAME, WTS, proof)
// H.test (theorem)
export default WTS