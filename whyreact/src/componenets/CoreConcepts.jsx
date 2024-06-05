import React from 'react'
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS} from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
        <h2>Core Concepts</h2>
<ul>

{CORE_CONCEPTS.map((items)=> <CoreConcept key={items.title} {...items} />)}
</ul>
    </section>
  )
}



export default CoreConcepts